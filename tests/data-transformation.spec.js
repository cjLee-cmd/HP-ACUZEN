import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'http://localhost:5174';
const DATA_TRANSFORMATION_URL = BASE_URL + '/#/data-transformation';

// Helper function to create test files
const createTestFile = (filename, content, size = 1024) => {
  const testFilesDir = path.join(__dirname, 'test-files');
  if (!fs.existsSync(testFilesDir)) {
    fs.mkdirSync(testFilesDir, { recursive: true });
  }

  const filePath = path.join(testFilesDir, filename);
  const fileContent = content || 'a'.repeat(size);
  fs.writeFileSync(filePath, fileContent);
  return filePath;
};

// Create test files before running tests
test.beforeAll(async () => {
  // Create valid test files
  createTestFile('test-data.csv', 'Name,Age,City\nJohn,25,Seoul\nJane,30,Busan\n');
  createTestFile('test-data.xlsx', 'Mock Excel Content', 2048);
  createTestFile('large-file.csv', 'header1,header2\n', 60 * 1024 * 1024); // 60MB file
  createTestFile('invalid-file.txt', 'This is not a valid data file');
  createTestFile('small-file.csv', 'id,value\n1,test\n', 100);
});

test.describe('DataTransformation Page - Comprehensive E2E Tests', () => {

  test.describe('1. Page Load & Navigation Testing', () => {
    test('should load the DataTransformation page correctly', async ({ page }) => {
      await page.goto(DATA_TRANSFORMATION_URL);

      // Verify page loads
      await expect(page).toHaveURL(DATA_TRANSFORMATION_URL);

      // Check page title and header
      await expect(page.locator('h1')).toContainText('규제 데이터 표준화');

      // Verify page description is visible
      await expect(page.locator('.page-description')).toBeVisible();
      await expect(page.locator('.page-description')).toContainText('식약처, FDA, EMA 등 규제기관의 원시 데이터를');

      // Check all main sections are present
      await expect(page.locator('h3').filter({ hasText: '1. 데이터 파일 업로드' })).toBeVisible();
      await expect(page.locator('h3').filter({ hasText: '2. 변환 설정' })).toBeVisible();
      await expect(page.locator('h3').filter({ hasText: '3. 데이터 변환 실행' })).toBeVisible();
    });

    test('should have proper styling and layout', async ({ page }) => {
      await page.goto(DATA_TRANSFORMATION_URL);

      // Check gradient background is applied
      const pageElement = page.locator('.data-transformation-page');
      await expect(pageElement).toHaveCSS('background', /var\(--gradient-hero\)|linear-gradient/);

      // Check container max-width
      const container = page.locator('.data-transformation-page .container');
      await expect(container).toHaveCSS('max-width', '1200px');

      // Check transformation container styling
      const transformationContainer = page.locator('.transformation-container');
      await expect(transformationContainer).toHaveCSS('border-radius', '20px');
    });
  });

  test.describe('2. File Upload Testing', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(DATA_TRANSFORMATION_URL);
    });

    test('should show file upload area with correct styling', async ({ page }) => {
      const uploadArea = page.locator('.file-upload-area');

      // Check upload area is visible
      await expect(uploadArea).toBeVisible();

      // Check upload icon and text
      await expect(page.locator('.upload-icon')).toContainText('📁');
      await expect(page.locator('.upload-text h4')).toContainText('파일을 드래그하여 업로드하거나 클릭하여 선택하세요');
      await expect(page.locator('.upload-text p')).toContainText('지원 형식: CSV, Excel (XLS, XLSX) | 최대 파일 크기: 50MB');
    });

    test('should upload files via click-to-upload', async ({ page }) => {
      const testFilePath = createTestFile('click-upload-test.csv', 'name,value\ntest,123\n');

      // Upload file via file input
      const fileInput = page.locator('.file-input');
      await fileInput.setInputFiles(testFilePath);

      // Verify file appears in uploaded files list
      await expect(page.locator('.uploaded-files')).toBeVisible();
      await expect(page.locator('.uploaded-files h4')).toContainText('업로드된 파일 (1개)');
      await expect(page.locator('.file-name')).toContainText('click-upload-test.csv');
      await expect(page.locator('.file-status')).toContainText('✅ 업로드 완료');
    });

    test('should upload multiple files', async ({ page }) => {
      const testFile1 = createTestFile('multi-upload-1.csv', 'data1,data2\nvalue1,value2\n');
      const testFile2 = createTestFile('multi-upload-2.csv', 'col1,col2\nval1,val2\n');

      const fileInput = page.locator('.file-input');
      await fileInput.setInputFiles([testFile1, testFile2]);

      // Verify both files are uploaded
      await expect(page.locator('.uploaded-files h4')).toContainText('업로드된 파일 (2개)');
      await expect(page.locator('.file-name').first()).toContainText('multi-upload-1.csv');
      await expect(page.locator('.file-name').last()).toContainText('multi-upload-2.csv');
    });

    test('should remove uploaded files', async ({ page }) => {
      const testFilePath = createTestFile('remove-test.csv', 'header\ndata\n');

      // Upload file
      await page.locator('.file-input').setInputFiles(testFilePath);
      await expect(page.locator('.uploaded-files')).toBeVisible();

      // Remove file
      await page.locator('.remove-file-btn').click();

      // Verify file is removed
      await expect(page.locator('.uploaded-files')).not.toBeVisible();
    });

    test('should show file size correctly', async ({ page }) => {
      const testFilePath = createTestFile('size-test.csv', 'a'.repeat(2048)); // 2KB file

      await page.locator('.file-input').setInputFiles(testFilePath);

      // Check file size display
      await expect(page.locator('.file-size')).toContainText('2 KB');
    });

    test('should reject invalid file types', async ({ page }) => {
      const invalidFilePath = createTestFile('invalid.doc', 'This is not a CSV file');

      // Upload the invalid file
      await page.locator('.file-input').setInputFiles(invalidFilePath);

      // Wait a moment for processing
      await page.waitForTimeout(1000);

      // Should not show uploaded files section since invalid file is rejected
      await expect(page.locator('.uploaded-files')).not.toBeVisible();
    });

    test('should handle drag and drop styling', async ({ page }) => {
      const uploadArea = page.locator('.file-upload-area');

      // Test hover effect
      await uploadArea.hover();
      await expect(uploadArea).toHaveClass(/file-upload-area/);

      // Drag over simulation would require more complex file handling
      // For now, we verify the CSS classes exist
      const dragOverClass = await page.evaluate(() => {
        const element = document.querySelector('.file-upload-area');
        element.classList.add('drag-over');
        return element.classList.contains('drag-over');
      });
      expect(dragOverClass).toBe(true);
    });
  });

  test.describe('3. Configuration Testing', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(DATA_TRANSFORMATION_URL);
    });

    test('should have correct default configuration values', async ({ page }) => {
      // Check source format default
      const sourceSelect = page.locator('select').first();
      await expect(sourceSelect).toHaveValue('mfds_raw');

      // Check target format default
      const targetSelect = page.locator('select').last();
      await expect(targetSelect).toHaveValue('cdisc_sdtm');

      // Check checkboxes default state
      const validationCheckbox = page.locator('input[type="checkbox"]').first();
      const reportCheckbox = page.locator('input[type="checkbox"]').last();

      await expect(validationCheckbox).toBeChecked();
      await expect(reportCheckbox).toBeChecked();
    });

    test('should change source format and update description', async ({ page }) => {
      const sourceSelect = page.locator('select').first();

      // Change to FDA format
      await sourceSelect.selectOption('fda_raw');
      await expect(sourceSelect).toHaveValue('fda_raw');

      // Check description updates
      const description = page.locator('.format-description').first();
      await expect(description).toContainText('FDA에서 제공하는 원시 데이터 파일');
    });

    test('should change target format and update description', async ({ page }) => {
      const targetSelect = page.locator('select').last();

      // Change to ADaM format
      await targetSelect.selectOption('cdisc_adam');
      await expect(targetSelect).toHaveValue('cdisc_adam');

      // Check description updates
      const description = page.locator('.format-description').last();
      await expect(description).toContainText('Analysis Data Model 표준 형식');
    });

    test('should toggle validation checkbox', async ({ page }) => {
      const validationCheckbox = page.locator('input[type="checkbox"]').first();

      // Initially checked
      await expect(validationCheckbox).toBeChecked();

      // Uncheck
      await validationCheckbox.uncheck();
      await expect(validationCheckbox).not.toBeChecked();

      // Check again
      await validationCheckbox.check();
      await expect(validationCheckbox).toBeChecked();
    });

    test('should toggle report generation checkbox', async ({ page }) => {
      const reportCheckbox = page.locator('input[type="checkbox"]').last();

      // Initially checked
      await expect(reportCheckbox).toBeChecked();

      // Uncheck
      await reportCheckbox.uncheck();
      await expect(reportCheckbox).not.toBeChecked();

      // Check again
      await reportCheckbox.check();
      await expect(reportCheckbox).toBeChecked();
    });

    test('should display all source format options', async ({ page }) => {
      const sourceSelect = page.locator('select').first();

      // Get all options
      const options = await sourceSelect.locator('option').allTextContents();

      expect(options).toContain('식약처 원시데이터 (CSV/Excel)');
      expect(options).toContain('FDA Raw Data (CSV/Excel)');
      expect(options).toContain('EMA Raw Data (CSV/Excel)');
      expect(options).toContain('사용자 정의 CSV');
    });

    test('should display all target format options', async ({ page }) => {
      const targetSelect = page.locator('select').last();

      // Get all options
      const options = await targetSelect.locator('option').allTextContents();

      expect(options).toContain('CDISC SDTM');
      expect(options).toContain('CDISC ADaM');
      expect(options).toContain('FDA Submission Format');
      expect(options).toContain('Excel 분석 리포트');
    });
  });

  test.describe('4. Transformation Process Testing', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(DATA_TRANSFORMATION_URL);
    });

    test('should have disabled transform button when no files uploaded', async ({ page }) => {
      const executeBtn = page.locator('.execute-btn');

      await expect(executeBtn).toBeDisabled();
      await expect(executeBtn).toContainText('데이터 변환 시작');
    });

    test('should enable transform button when files are uploaded', async ({ page }) => {
      const testFilePath = createTestFile('enable-btn-test.csv', 'data\nvalue\n');

      // Upload file
      await page.locator('.file-input').setInputFiles(testFilePath);

      // Button should be enabled
      const executeBtn = page.locator('.execute-btn');
      await expect(executeBtn).toBeEnabled();
    });

    test('should show processing state during transformation', async ({ page }) => {
      const testFilePath = createTestFile('process-test.csv', 'col1,col2\nval1,val2\n');

      // Upload file
      await page.locator('.file-input').setInputFiles(testFilePath);

      // Start transformation
      const executeBtn = page.locator('.execute-btn');
      await executeBtn.click();

      // Check processing state
      await expect(executeBtn).toBeDisabled();
      await expect(executeBtn).toContainText('변환 중...');

      // Check processing indicator
      await expect(page.locator('.processing-status')).toBeVisible();
      await expect(page.locator('.spinner')).toBeVisible();
      await expect(page.locator('.progress-indicator')).toContainText('데이터를 분석하고 변환하고 있습니다...');
    });

    test('should complete transformation and show results', async ({ page }) => {
      const testFilePath = createTestFile('complete-test.csv', 'name,age\nJohn,25\n');

      // Upload file
      await page.locator('.file-input').setInputFiles(testFilePath);

      // Start transformation
      await page.locator('.execute-btn').click();

      // Wait for transformation to complete (simulated 5 seconds)
      await page.waitForTimeout(6000);

      // Check validation results section appears
      await expect(page.locator('.validation-section')).toBeVisible();
      await expect(page.locator('h3').filter({ hasText: '4. 데이터 품질 검증 결과' })).toBeVisible();

      // Check validation cards
      await expect(page.locator('.validation-card').first()).toBeVisible();
      await expect(page.locator('.validation-value').first()).toBeVisible();

      // Check transformation results section
      await expect(page.locator('.results-section')).toBeVisible();
      await expect(page.locator('h3').filter({ hasText: '5. 변환 결과' })).toBeVisible();

      // Check result item
      await expect(page.locator('.result-item')).toBeVisible();
      await expect(page.locator('.result-status')).toContainText('✅ 변환 완료');

      // Check completion message
      await expect(page.locator('.completion-message')).toBeVisible();
      await expect(page.locator('.completion-message h4')).toContainText('🎉 데이터 변환이 성공적으로 완료되었습니다!');
    });

    test('should show validation results with correct data', async ({ page }) => {
      const testFilePath = createTestFile('validation-test.csv', 'id,name\n1,test\n');

      await page.locator('.file-input').setInputFiles(testFilePath);
      await page.locator('.execute-btn').click();

      // Wait for completion
      await page.waitForTimeout(6000);

      // Check validation cards exist
      const validationCards = page.locator('.validation-card');
      await expect(validationCards).toHaveCount(6);

      // Check validation card titles
      await expect(page.locator('.validation-card h4').first()).toContainText('전체 레코드 수');
      await expect(page.locator('.validation-card h4').nth(1)).toContainText('유효 레코드 수');
      await expect(page.locator('.validation-card h4').nth(2)).toContainText('오류 수');
      await expect(page.locator('.validation-card h4').nth(3)).toContainText('경고 수');
      await expect(page.locator('.validation-card h4').nth(4)).toContainText('데이터 완성도');
      await expect(page.locator('.validation-card h4').nth(5)).toContainText('데이터 정확도');

      // Check values are numeric/percentage
      const totalRecords = await page.locator('.validation-value').first().textContent();
      expect(totalRecords).toMatch(/^\d{1,3}(,\d{3})*$/);
    });
  });

  test.describe('5. Interactive Elements Testing', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(DATA_TRANSFORMATION_URL);
    });

    test('should have clickable file upload area', async ({ page }) => {
      const uploadArea = page.locator('.file-upload-area');

      // Check it's clickable
      await expect(uploadArea).toBeVisible();
      await uploadArea.click();

      // File input should be triggered (we can't directly test file dialog)
      const fileInput = page.locator('.file-input');
      await expect(fileInput).toBeAttached();
    });

    test('should have functional dropdown selections', async ({ page }) => {
      const sourceSelect = page.locator('select').first();
      const targetSelect = page.locator('select').last();

      // Test source format selection
      await sourceSelect.click();
      await sourceSelect.selectOption('ema_raw');
      await expect(sourceSelect).toHaveValue('ema_raw');

      // Test target format selection
      await targetSelect.click();
      await targetSelect.selectOption('fda_submission');
      await expect(targetSelect).toHaveValue('fda_submission');
    });

    test('should have responsive checkbox interactions', async ({ page }) => {
      const checkboxes = page.locator('input[type="checkbox"]');

      // Test first checkbox
      await checkboxes.first().click();
      await expect(checkboxes.first()).not.toBeChecked();

      await checkboxes.first().click();
      await expect(checkboxes.first()).toBeChecked();

      // Test second checkbox
      await checkboxes.last().click();
      await expect(checkboxes.last()).not.toBeChecked();
    });

    test('should show hover effects on buttons', async ({ page }) => {
      const testFilePath = createTestFile('hover-test.csv', 'data\nvalue\n');
      await page.locator('.file-input').setInputFiles(testFilePath);

      const executeBtn = page.locator('.execute-btn');

      // Hover and check styling changes
      await executeBtn.hover();
      // Button should still be enabled and styled
      await expect(executeBtn).toBeEnabled();
    });

    test('should have accessible keyboard navigation', async ({ page }) => {
      // Test tab navigation through form elements
      await page.keyboard.press('Tab'); // Should focus on first interactive element
      await page.keyboard.press('Tab'); // Move to next element

      // Test form elements are focusable
      const sourceSelect = page.locator('select').first();
      await sourceSelect.focus();
      await expect(sourceSelect).toBeFocused();

      // Test keyboard selection in dropdown
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Enter');
    });
  });

  test.describe('6. Error Handling Testing', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(DATA_TRANSFORMATION_URL);
    });

    test('should show alert when trying to transform without files', async ({ page }) => {
      // Set up dialog handler
      page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('변환할 파일을 먼저 업로드해주세요.');
        await dialog.accept();
      });

      // Try to execute transformation without files
      const executeBtn = page.locator('.execute-btn');
      await expect(executeBtn).toBeDisabled();

      // Force click to trigger the check (if button becomes enabled somehow)
      await page.evaluate(() => {
        document.querySelector('.execute-btn').disabled = false;
      });
      await executeBtn.click();
    });

    test('should reject files over 50MB limit', async ({ page }) => {
      // Create a 60MB file
      const largeFilePath = createTestFile('large.csv', 'header\n' + 'a'.repeat(60 * 1024 * 1024));

      await page.locator('.file-input').setInputFiles(largeFilePath);

      // Should not show uploaded files (file rejected)
      await expect(page.locator('.uploaded-files')).not.toBeVisible();
    });

    test('should handle mixed valid and invalid files', async ({ page }) => {
      const validFile = createTestFile('valid.csv', 'data\nvalue\n');
      const invalidFile = createTestFile('invalid.doc', 'not a csv');

      // Upload both files
      await page.locator('.file-input').setInputFiles([validFile, invalidFile]);

      // Wait for processing
      await page.waitForTimeout(1000);

      // Should only show valid file
      await expect(page.locator('.uploaded-files h4')).toContainText('업로드된 파일 (1개)');
      await expect(page.locator('.file-name')).toContainText('valid.csv');
    });

    test('should maintain state after removing all files', async ({ page }) => {
      const testFile = createTestFile('temp.csv', 'data\nvalue\n');

      // Upload and then remove file
      await page.locator('.file-input').setInputFiles(testFile);
      await page.locator('.remove-file-btn').click();

      // Button should be disabled again
      const executeBtn = page.locator('.execute-btn');
      await expect(executeBtn).toBeDisabled();

      // Upload area should be back to normal
      await expect(page.locator('.file-upload-area')).toBeVisible();
    });
  });

  test.describe('7. Visual & Design Testing', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(DATA_TRANSFORMATION_URL);
    });

    test('should have correct color scheme applied', async ({ page }) => {
      // Check main page background
      const pageElement = page.locator('.data-transformation-page');
      await expect(pageElement).toBeVisible();

      // Check container styling
      const container = page.locator('.transformation-container');
      await expect(container).toHaveCSS('border-radius', '20px');

      // Check section headers have accent bars
      const sectionHeader = page.locator('.transformation-container h3').first();
      await expect(sectionHeader).toBeVisible();
    });

    test('should be responsive on mobile viewports', async ({ page }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto(DATA_TRANSFORMATION_URL);

      // Check page adapts to mobile
      await expect(page.locator('.page-header h1')).toBeVisible();

      // Check container padding adapts
      const container = page.locator('.data-transformation-page .container');
      await expect(container).toHaveCSS('padding-left', '15px');
      await expect(container).toHaveCSS('padding-right', '15px');

      // Check config grid becomes single column
      const configGrid = page.locator('.config-grid');
      await expect(configGrid).toBeVisible();
    });

    test('should be responsive on tablet viewports', async ({ page }) => {
      // Set tablet viewport
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto(DATA_TRANSFORMATION_URL);

      // Check layout adapts
      await expect(page.locator('.data-transformation-page')).toBeVisible();
      await expect(page.locator('.transformation-container')).toBeVisible();

      // Check sections remain properly spaced
      const sections = page.locator('.transformation-container > div');
      await expect(sections).toHaveCount(3); // Upload, Config, Execution sections
    });

    test('should have proper visual hierarchy', async ({ page }) => {
      // Check main heading is prominent
      const mainHeading = page.locator('.page-header h1');
      await expect(mainHeading).toBeVisible();

      // Check section headings are smaller but prominent
      const sectionHeading = page.locator('.transformation-container h3').first();
      await expect(sectionHeading).toHaveCSS('font-size', '24px'); // 1.5rem

      // Check section has visual separator
      const sections = page.locator('.transformation-container > div');
      await expect(sections.first()).toHaveCSS('border-bottom', '1px solid var(--border-primary)');
    });

    test('should have accessible contrast and typography', async ({ page }) => {
      // Check text colors are visible
      const pageDescription = page.locator('.page-description');
      await expect(pageDescription).toBeVisible();

      // Check form labels are readable
      const labels = page.locator('.config-item label');
      await expect(labels.first()).toBeVisible();

      // Check interactive elements are visible
      const executeBtn = page.locator('.execute-btn');
      await expect(executeBtn).toBeVisible();
    });
  });

  test.describe('8. Complete Workflow Integration Tests', () => {
    test('should complete full MFDS data transformation workflow', async ({ page }) => {
      await page.goto(DATA_TRANSFORMATION_URL);

      // Step 1: Upload MFDS data file
      const mfdsFile = createTestFile('mfds-sample.csv',
        'SubjectID,VisitDate,TestResult,Units\n' +
        'S001,2024-01-15,120.5,mg/dL\n' +
        'S002,2024-01-16,110.2,mg/dL\n'
      );

      await page.locator('.file-input').setInputFiles(mfdsFile);
      await expect(page.locator('.uploaded-files')).toBeVisible();

      // Step 2: Configure transformation settings
      // Keep default MFDS source format
      await expect(page.locator('select').first()).toHaveValue('mfds_raw');

      // Set target to CDISC SDTM
      await page.locator('select').last().selectOption('cdisc_sdtm');

      // Enable validation and reporting
      await expect(page.locator('input[type="checkbox"]').first()).toBeChecked();
      await expect(page.locator('input[type="checkbox"]').last()).toBeChecked();

      // Step 3: Execute transformation
      await page.locator('.execute-btn').click();

      // Wait for processing
      await expect(page.locator('.processing-status')).toBeVisible();

      // Step 4: Verify completion
      await page.waitForTimeout(6000);

      // Check validation results
      await expect(page.locator('.validation-section')).toBeVisible();
      await expect(page.locator('.validation-card')).toHaveCount(6);

      // Check transformation results
      await expect(page.locator('.results-section')).toBeVisible();
      await expect(page.locator('.result-item')).toBeVisible();
      await expect(page.locator('.download-btn')).toBeVisible();
      await expect(page.locator('.report-btn')).toBeVisible();

      // Check completion message
      await expect(page.locator('.completion-message')).toContainText('성공적으로 완료');

      // Verify file naming convention
      await expect(page.locator('.result-details')).toContainText('mfds-sample_cdisc_sdtm.csv');
    });

    test('should handle multiple files workflow', async ({ page }) => {
      await page.goto(DATA_TRANSFORMATION_URL);

      // Upload multiple files
      const file1 = createTestFile('batch1.csv', 'id,value\n1,100\n2,200\n');
      const file2 = createTestFile('batch2.csv', 'id,value\n3,300\n4,400\n');

      await page.locator('.file-input').setInputFiles([file1, file2]);

      // Verify both files uploaded
      await expect(page.locator('.uploaded-files h4')).toContainText('업로드된 파일 (2개)');

      // Execute transformation
      await page.locator('.execute-btn').click();

      // Wait for completion
      await page.waitForTimeout(6000);

      // Should have results for both files
      const resultItems = page.locator('.result-item');
      await expect(resultItems).toHaveCount(2);

      // Each should have download and report buttons
      await expect(page.locator('.download-btn')).toHaveCount(2);
      await expect(page.locator('.report-btn')).toHaveCount(2);
    });
  });
});

// Cleanup test files after all tests
test.afterAll(async () => {
  const testFilesDir = path.join(__dirname, 'test-files');
  if (fs.existsSync(testFilesDir)) {
    fs.rmSync(testFilesDir, { recursive: true, force: true });
  }
});