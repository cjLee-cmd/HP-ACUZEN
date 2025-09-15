/**
 * Web Designer Agent
 * Specialized in UI/UX design, React components, and technical implementation
 */

import { communicationSystem, DesignReference } from './AgentCommunication.js';

class WebDesignerAgent {
  constructor() {
    this.agentId = 'web-designer';
    this.currentConversation = null;
    this.designProposals = [];
    this.implementationQueue = [];
  }

  // Start a design review conversation
  initiateDesignReview(topic) {
    const conversationId = communicationSystem.createConversation(topic, 'high');
    const conversation = communicationSystem.getConversation(conversationId);
    
    // Add both agents to the conversation
    conversation.addParticipant(this.agentId, 'Design Specialist', this.getExpertise());
    conversation.addParticipant('dr-sarah-kim', 'UX Evaluator', ['User Experience', 'Usability']);
    
    this.currentConversation = conversationId;
    return conversationId;
  }

  // Analyze current design and prepare initial assessment
  analyzeCurrentDesign() {
    return {
      strengths: [
        'Modern React architecture with proper component separation',
        'Internationalization support for Korean/English',
        'Clean gradient background system',
        'Responsive design foundation'
      ],
      weaknesses: [
        'Limited visual hierarchy in content sections',
        'Potential accessibility improvements needed',
        'Korean typography could be enhanced',
        'Interactive elements need refinement',
        'Color contrast may need validation'
      ],
      opportunities: [
        'Enhanced Korean language user experience',
        'Better mobile responsiveness',
        'Improved loading performance',
        'Advanced accessibility features',
        'Modern design system implementation'
      ]
    };
  }

  // Send design assessment to Dr. Sarah Kim
  sendDesignAssessment(conversationId) {
    const analysis = this.analyzeCurrentDesign();
    
    const content = `
**Initial Design Assessment**

**Current Strengths:**
${analysis.strengths.map(item => `• ${item}`).join('\n')}

**Areas for Improvement:**
${analysis.weaknesses.map(item => `• ${item}`).join('\n')}

**Enhancement Opportunities:**
${analysis.opportunities.map(item => `• ${item}`).join('\n')}

**Specific Technical Observations:**
- Hero section needs stronger visual impact
- Navigation could be more intuitive for Korean users  
- Service cards need better visual hierarchy
- Contact form needs UX improvements
- Performance optimization opportunities exist

I'm ready to address any specific concerns you have about the user experience. What aspects should we prioritize for improvement?
    `;

    const references = [
      new DesignReference('Hero Component', 'src/components/Hero.jsx', 1, 'Main landing section'),
      new DesignReference('Services Section', 'src/components/Services.jsx', 1, 'Service offerings display'),
      new DesignReference('Contact Form', 'src/components/Contact.jsx', 1, 'User interaction point')
    ];

    return communicationSystem.sendMessage(
      conversationId,
      this.agentId,
      content,
      'proposal',
      'high',
      references
    );
  }

  // Respond to feedback from Dr. Sarah Kim
  respondToFeedback(conversationId, feedback) {
    console.log(`[WEB DESIGNER] Analyzing feedback from Dr. Sarah Kim...`);
    
    // Create specific design proposals based on feedback
    const proposals = this.createDesignProposals(feedback);
    
    const content = `
**Response to Your Feedback**

I understand your concerns. Here are my specific proposals to address each issue:

${proposals.map((proposal, index) => `
**${index + 1}. ${proposal.title}**
*Priority: ${proposal.priority}*
- **Problem**: ${proposal.problem}
- **Solution**: ${proposal.solution}  
- **Implementation**: ${proposal.implementation}
- **Expected Impact**: ${proposal.impact}
- **Timeline**: ${proposal.timeline}
`).join('\n')}

**Implementation Priority Order:**
${proposals
  .sort((a, b) => this.getPriorityWeight(b.priority) - this.getPriorityWeight(a.priority))
  .map((p, i) => `${i + 1}. ${p.title}`)
  .join('\n')}

Which of these proposals would you like me to implement first? Are there any modifications or additional requirements?
    `;

    this.designProposals = proposals;

    return communicationSystem.sendMessage(
      conversationId,
      this.agentId,
      content,
      'proposal',
      'high'
    );
  }

  // Create specific design proposals based on feedback
  createDesignProposals(feedback) {
    const proposals = [];

    // Common improvement areas based on typical UX feedback
    if (feedback.includes('navigation') || feedback.includes('menu')) {
      proposals.push({
        title: 'Enhanced Navigation Experience',
        priority: 'high',
        problem: 'Navigation may not be intuitive for Korean users',
        solution: 'Implement Korean UX patterns with clear visual hierarchy and familiar interaction patterns',
        implementation: 'Redesign Header component with improved Korean typography, add hover states, implement mobile-first responsive navigation',
        impact: 'Improved user navigation success rate and reduced cognitive load',
        timeline: '2-3 hours',
        files: ['src/components/Header.jsx', 'src/components/Header.module.css']
      });
    }

    if (feedback.includes('typography') || feedback.includes('font') || feedback.includes('korean')) {
      proposals.push({
        title: 'Korean Typography Optimization',
        priority: 'high',
        problem: 'Korean text rendering and readability could be enhanced',
        solution: 'Implement optimal Korean font loading, improve line-height, letter-spacing, and ensure proper text hierarchy',
        implementation: 'Update CSS with Korean-optimized typography scale, implement font-display strategies, improve readability metrics',
        impact: 'Better reading experience for Korean users, improved accessibility',
        timeline: '1-2 hours',
        files: ['src/styles/index.css', 'src/components/Typography.jsx']
      });
    }

    if (feedback.includes('accessibility') || feedback.includes('a11y')) {
      proposals.push({
        title: 'Comprehensive Accessibility Enhancement',
        priority: 'high',
        problem: 'Accessibility features need systematic improvement',
        solution: 'Implement WCAG 2.1 AA compliance with focus management, ARIA labels, keyboard navigation, and screen reader optimization',
        implementation: 'Add semantic HTML, implement focus indicators, ensure color contrast, add ARIA labels, test with screen readers',
        impact: 'Accessible to users with disabilities, improved SEO, legal compliance',
        timeline: '3-4 hours',
        files: ['All component files', 'src/styles/accessibility.css']
      });
    }

    if (feedback.includes('mobile') || feedback.includes('responsive')) {
      proposals.push({
        title: 'Mobile Experience Optimization',
        priority: 'medium',
        problem: 'Mobile user experience needs refinement',
        solution: 'Implement mobile-first responsive design with touch-optimized interactions and performance optimization',
        implementation: 'Enhance breakpoint system, optimize touch targets, improve mobile performance, implement gesture support',
        impact: 'Better mobile user engagement and conversion rates',
        timeline: '2-3 hours',
        files: ['src/styles/index.css', 'All component modules']
      });
    }

    if (feedback.includes('performance') || feedback.includes('speed') || feedback.includes('loading')) {
      proposals.push({
        title: 'Performance Optimization',
        priority: 'medium',
        problem: 'Loading performance and user experience can be improved',
        solution: 'Implement code splitting, optimize images, improve Core Web Vitals, and enhance perceived performance',
        implementation: 'Add React.lazy(), optimize bundle size, implement progressive loading, add loading states',
        impact: 'Faster page loads, better user retention, improved SEO',
        timeline: '2-3 hours',
        files: ['src/App.jsx', 'All component files', 'vite.config.js']
      });
    }

    // Always include visual hierarchy improvement
    proposals.push({
      title: 'Visual Hierarchy Enhancement',
      priority: 'medium',
      problem: 'Content sections need stronger visual distinction and hierarchy',
      solution: 'Implement clear visual hierarchy with improved spacing, typography scale, and content organization',
      implementation: 'Design system with consistent spacing scale, typography hierarchy, improved color usage, better content flow',
      impact: 'Easier content consumption, better user engagement, professional appearance',
      timeline: '2-3 hours',
      files: ['src/styles/design-system.css', 'All component files']
    });

    return proposals;
  }

  getPriorityWeight(priority) {
    const weights = { urgent: 4, high: 3, medium: 2, low: 1 };
    return weights[priority] || 1;
  }

  // Implement approved changes
  implementChanges(approvedProposals) {
    console.log(`[WEB DESIGNER] Implementing ${approvedProposals.length} approved changes...`);
    
    approvedProposals.forEach(proposal => {
      this.implementationQueue.push({
        ...proposal,
        status: 'queued',
        queuedAt: new Date().toISOString()
      });
    });

    return `Implementation queued for ${approvedProposals.length} changes. Starting with highest priority items.`;
  }

  getExpertise() {
    return [
      'UI/UX Design',
      'React Components', 
      'CSS Styling',
      'Responsive Design',
      'Accessibility',
      'Performance Optimization',
      'Korean Localization',
      'Design Systems'
    ];
  }
}

export default WebDesignerAgent;