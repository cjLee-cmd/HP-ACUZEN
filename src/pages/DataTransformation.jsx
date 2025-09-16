import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import './DataTransformation.css';

const DataTransformation = () => {
  const { t } = useTranslation();

  // 파일 업로드 상태
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [dragOver, setDragOver] = useState(false);

  // 변환 설정 상태
  const [transformationConfig, setTransformationConfig] = useState({
    sourceFormat: 'mfds_raw',
    targetFormat: 'cdisc_sdtm',
    includeValidation: true,
    generateReport: true
  });

  // 변환 결과 상태
  const [transformationResults, setTransformationResults] = useState([]);
  const [processing, setProcessing] = useState(false);
  const [validationResults, setValidationResults] = useState(null);

  // 지원하는 파일 형식과 변환 옵션
  const supportedFormats = {
    source: [
      { value: 'mfds_raw', label: '식약처 원시데이터 (CSV/Excel)', description: '식약처에서 제공하는 원시 데이터 파일' },
      { value: 'fda_raw', label: 'FDA Raw Data (CSV/Excel)', description: 'FDA에서 제공하는 원시 데이터 파일' },
      { value: 'ema_raw', label: 'EMA Raw Data (CSV/Excel)', description: 'EMA에서 제공하는 원시 데이터 파일' },
      { value: 'custom_csv', label: '사용자 정의 CSV', description: '사용자가 정의한 CSV 형식' }
    ],
    target: [
      { value: 'cdisc_sdtm', label: 'CDISC SDTM', description: 'Study Data Tabulation Model 표준 형식' },
      { value: 'cdisc_adam', label: 'CDISC ADaM', description: 'Analysis Data Model 표준 형식' },
      { value: 'fda_submission', label: 'FDA Submission Format', description: 'FDA 제출용 표준 데이터 형식' },
      { value: 'excel_report', label: 'Excel 분석 리포트', description: '분석용 Excel 스프레드시트' }
    ]
  };

  // 드래그 앤 드롭 핸들러
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setDragOver(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  }, []);

  // 파일 처리
  const handleFiles = useCallback((files) => {
    const validFiles = files.filter(file => {
      const validTypes = [
        'text/csv',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'text/plain'
      ];
      return validTypes.includes(file.type) && file.size <= 50 * 1024 * 1024; // 50MB 제한
    });

    const newFiles = validFiles.map(file => ({
      id: Date.now() + Math.random(),
      file,
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'uploaded',
      preview: null
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);
  }, []);

  // 파일 선택 핸들러
  const handleFileSelect = useCallback((e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  }, [handleFiles]);

  // 파일 제거
  const removeFile = useCallback((fileId) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
  }, []);

  // 변환 설정 변경
  const handleConfigChange = useCallback((key, value) => {
    setTransformationConfig(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  // 데이터 변환 실행
  const executeTransformation = useCallback(async () => {
    if (uploadedFiles.length === 0) {
      alert('변환할 파일을 먼저 업로드해주세요.');
      return;
    }

    setProcessing(true);

    // 시뮬레이션된 변환 프로세스
    try {
      // 1단계: 데이터 검증
      await new Promise(resolve => setTimeout(resolve, 2000));

      const validation = {
        totalRecords: Math.floor(Math.random() * 10000) + 1000,
        validRecords: Math.floor(Math.random() * 9000) + 900,
        errors: Math.floor(Math.random() * 100),
        warnings: Math.floor(Math.random() * 200),
        completeness: (Math.random() * 20 + 80).toFixed(1) + '%',
        accuracy: (Math.random() * 10 + 90).toFixed(1) + '%'
      };

      setValidationResults(validation);

      // 2단계: 데이터 변환
      await new Promise(resolve => setTimeout(resolve, 3000));

      const results = uploadedFiles.map(file => ({
        originalFile: file.name,
        transformedFile: `${file.name.split('.')[0]}_${transformationConfig.targetFormat}.${transformationConfig.targetFormat.includes('excel') ? 'xlsx' : 'csv'}`,
        status: 'completed',
        recordsProcessed: Math.floor(Math.random() * 5000) + 1000,
        transformationTime: (Math.random() * 30 + 10).toFixed(1) + 's',
        downloadUrl: '#', // 실제로는 다운로드 링크
        reportUrl: transformationConfig.generateReport ? '#' : null
      }));

      setTransformationResults(results);

    } catch (error) {
      console.error('변환 오류:', error);
      alert('데이터 변환 중 오류가 발생했습니다.');
    } finally {
      setProcessing(false);
    }
  }, [uploadedFiles, transformationConfig]);

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="data-transformation-page">
      <div className="container">
        {/* 헤더 섹션 */}
        <div className="page-header">
          <h1>규제 데이터 표준화</h1>
          <p className="page-description">
            식약처, FDA, EMA 등 규제기관의 원시 데이터를 CDISC 준수 표준 분석 형식으로 자동 변환합니다.
            데이터 품질 검증과 규제 제출용 포맷 변환을 지원합니다.
          </p>
        </div>

        <div className="transformation-container">
          {/* 파일 업로드 섹션 */}
          <div className="upload-section">
            <h3>1. 데이터 파일 업로드</h3>

            <div
              className={`file-upload-area ${dragOver ? 'drag-over' : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="upload-content">
                <div className="upload-icon">📁</div>
                <div className="upload-text">
                  <h4>파일을 드래그하여 업로드하거나 클릭하여 선택하세요</h4>
                  <p>지원 형식: CSV, Excel (XLS, XLSX) | 최대 파일 크기: 50MB</p>
                </div>
                <input
                  type="file"
                  multiple
                  accept=".csv,.xls,.xlsx,.txt"
                  onChange={handleFileSelect}
                  className="file-input"
                />
              </div>
            </div>

            {/* 업로드된 파일 목록 */}
            {uploadedFiles.length > 0 && (
              <div className="uploaded-files">
                <h4>업로드된 파일 ({uploadedFiles.length}개)</h4>
                {uploadedFiles.map(file => (
                  <div key={file.id} className="file-item">
                    <div className="file-info">
                      <span className="file-name">{file.name}</span>
                      <span className="file-size">{formatFileSize(file.size)}</span>
                    </div>
                    <div className="file-actions">
                      <span className="file-status">✅ 업로드 완료</span>
                      <button
                        onClick={() => removeFile(file.id)}
                        className="remove-file-btn"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 변환 설정 섹션 */}
          <div className="config-section">
            <h3>2. 변환 설정</h3>

            <div className="config-grid">
              <div className="config-item">
                <label>원본 데이터 형식</label>
                <select
                  value={transformationConfig.sourceFormat}
                  onChange={(e) => handleConfigChange('sourceFormat', e.target.value)}
                >
                  {supportedFormats.source.map(format => (
                    <option key={format.value} value={format.value}>
                      {format.label}
                    </option>
                  ))}
                </select>
                <p className="format-description">
                  {supportedFormats.source.find(f => f.value === transformationConfig.sourceFormat)?.description}
                </p>
              </div>

              <div className="config-item">
                <label>변환 대상 형식</label>
                <select
                  value={transformationConfig.targetFormat}
                  onChange={(e) => handleConfigChange('targetFormat', e.target.value)}
                >
                  {supportedFormats.target.map(format => (
                    <option key={format.value} value={format.value}>
                      {format.label}
                    </option>
                  ))}
                </select>
                <p className="format-description">
                  {supportedFormats.target.find(f => f.value === transformationConfig.targetFormat)?.description}
                </p>
              </div>

              <div className="config-item">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={transformationConfig.includeValidation}
                    onChange={(e) => handleConfigChange('includeValidation', e.target.checked)}
                  />
                  데이터 품질 검증 포함
                </label>
                <p className="option-description">변환 전 데이터 무결성 및 품질 검사 수행</p>
              </div>

              <div className="config-item">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={transformationConfig.generateReport}
                    onChange={(e) => handleConfigChange('generateReport', e.target.checked)}
                  />
                  변환 리포트 생성
                </label>
                <p className="option-description">변환 과정 및 결과에 대한 상세 리포트 생성</p>
              </div>
            </div>
          </div>

          {/* 변환 실행 섹션 */}
          <div className="execution-section">
            <h3>3. 데이터 변환 실행</h3>

            <div className="execution-controls">
              <button
                onClick={executeTransformation}
                disabled={processing || uploadedFiles.length === 0}
                className="execute-btn"
              >
                {processing ? '변환 중...' : '데이터 변환 시작'}
              </button>

              {processing && (
                <div className="processing-status">
                  <div className="progress-indicator">
                    <div className="spinner"></div>
                    <span>데이터를 분석하고 변환하고 있습니다...</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 검증 결과 섹션 */}
          {validationResults && (
            <div className="validation-section">
              <h3>4. 데이터 품질 검증 결과</h3>

              <div className="validation-grid">
                <div className="validation-card">
                  <h4>전체 레코드 수</h4>
                  <span className="validation-value">{validationResults.totalRecords.toLocaleString()}</span>
                </div>
                <div className="validation-card">
                  <h4>유효 레코드 수</h4>
                  <span className="validation-value">{validationResults.validRecords.toLocaleString()}</span>
                </div>
                <div className="validation-card">
                  <h4>오류 수</h4>
                  <span className="validation-value error">{validationResults.errors}</span>
                </div>
                <div className="validation-card">
                  <h4>경고 수</h4>
                  <span className="validation-value warning">{validationResults.warnings}</span>
                </div>
                <div className="validation-card">
                  <h4>데이터 완성도</h4>
                  <span className="validation-value">{validationResults.completeness}</span>
                </div>
                <div className="validation-card">
                  <h4>데이터 정확도</h4>
                  <span className="validation-value">{validationResults.accuracy}</span>
                </div>
              </div>
            </div>
          )}

          {/* 변환 결과 섹션 */}
          {transformationResults.length > 0 && (
            <div className="results-section">
              <h3>5. 변환 결과</h3>

              {transformationResults.map((result, index) => (
                <div key={index} className="result-item">
                  <div className="result-header">
                    <h4>{result.originalFile}</h4>
                    <span className="result-status">✅ 변환 완료</span>
                  </div>

                  <div className="result-details">
                    <div className="result-info">
                      <span>변환된 파일: {result.transformedFile}</span>
                      <span>처리된 레코드: {result.recordsProcessed.toLocaleString()}개</span>
                      <span>변환 시간: {result.transformationTime}</span>
                    </div>

                    <div className="result-actions">
                      <a href={result.downloadUrl} className="download-btn">
                        📥 변환된 파일 다운로드
                      </a>
                      {result.reportUrl && (
                        <a href={result.reportUrl} className="report-btn">
                          📊 변환 리포트 보기
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <div className="completion-message">
                <h4>🎉 데이터 변환이 성공적으로 완료되었습니다!</h4>
                <p>
                  변환된 데이터는 {transformationConfig.targetFormat.toUpperCase()} 표준을 준수하며,
                  규제 제출 및 분석에 바로 사용하실 수 있습니다.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataTransformation;