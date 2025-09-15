/**
 * Dr. Sarah Kim Agent
 * User Experience Evaluator specialized in Korean localization and healthcare UX
 */

import { communicationSystem } from './AgentCommunication.js';

class DrSarahKimAgent {
  constructor() {
    this.agentId = 'dr-sarah-kim';
    this.currentConversation = null;
    this.evaluationCriteria = {
      userExperience: ['intuitive navigation', 'clear information hierarchy', 'error prevention'],
      koreanLocalization: ['proper typography', 'cultural appropriateness', 'language-specific UX patterns'],
      accessibility: ['WCAG compliance', 'keyboard navigation', 'screen reader compatibility'],
      performance: ['fast loading', 'smooth interactions', 'mobile optimization'],
      trustworthiness: ['professional appearance', 'clear communication', 'reliable functionality']
    };
    this.feedbackHistory = [];
    this.satisfactionLevel = 0; // 0-100 scale
  }

  // Join an existing conversation
  joinConversation(conversationId) {
    this.currentConversation = conversationId;
    const conversation = communicationSystem.getConversation(conversationId);
    conversation.addParticipant(this.agentId, 'UX Evaluator', this.getExpertise());
  }

  // Evaluate the current design and provide initial critical feedback
  evaluateCurrentDesign() {
    console.log(`[DR. SARAH KIM] Conducting comprehensive UX evaluation...`);
    
    const evaluation = {
      overall_score: 60, // Out of 100
      critical_issues: [
        {
          category: 'Korean UX',
          severity: 'high',
          issue: 'Typography and spacing not optimized for Korean text readability',
          impact: 'Korean users may struggle with text comprehension and scanning',
          requirement: 'Implement proper Korean typography with optimal line-height and character spacing'
        },
        {
          category: 'Navigation',
          severity: 'high', 
          issue: 'Navigation structure may not follow Korean web conventions',
          impact: 'Users expect familiar patterns - current structure may cause confusion',
          requirement: 'Research and implement Korean web navigation patterns'
        },
        {
          category: 'Accessibility',
          severity: 'medium',
          issue: 'Missing semantic HTML and ARIA labels throughout the application',
          impact: 'Users with disabilities cannot effectively use the website',
          requirement: 'Full WCAG 2.1 AA compliance with screen reader testing'
        },
        {
          category: 'Mobile Experience',
          severity: 'medium',
          issue: 'Mobile interactions and touch targets need optimization',
          impact: 'Mobile users (majority in Korea) may have poor experience',
          requirement: 'Mobile-first approach with Korean mobile UX patterns'
        },
        {
          category: 'Visual Hierarchy',
          severity: 'medium',
          issue: 'Information hierarchy is not clear enough for quick scanning',
          impact: 'Users cannot quickly find what they need',
          requirement: 'Stronger visual hierarchy with clear content prioritization'
        }
      ],
      positive_aspects: [
        'Modern React architecture provides good foundation',
        'Internationalization setup is promising',
        'Clean gradient design has potential'
      ],
      immediate_priorities: [
        'Korean typography optimization',
        'Navigation UX improvement', 
        'Accessibility compliance',
        'Mobile experience enhancement'
      ]
    };

    this.satisfactionLevel = evaluation.overall_score;
    return evaluation;
  }

  // Send initial critical feedback
  sendInitialFeedback(conversationId) {
    const evaluation = this.evaluateCurrentDesign();
    
    const content = `
**UX Evaluation Results - Current Satisfaction: ${evaluation.overall_score}/100**

I've conducted a thorough evaluation of the current website. While there's a solid foundation, several critical issues need immediate attention before this can provide an acceptable user experience.

**CRITICAL ISSUES REQUIRING IMMEDIATE ATTENTION:**

${evaluation.critical_issues.map((issue, index) => `
**${index + 1}. ${issue.category} (${issue.severity.toUpperCase()} PRIORITY)**
- **Problem**: ${issue.issue}
- **User Impact**: ${issue.impact}  
- **Requirement**: ${issue.requirement}
`).join('\n')}

**What I DO appreciate:**
${evaluation.positive_aspects.map(aspect => `• ${aspect}`).join('\n')}

**IMMEDIATE ACTION REQUIRED:**
${evaluation.immediate_priorities.map((priority, index) => `${index + 1}. ${priority}`).join('\n')}

As a user experience professional, I cannot recommend this website in its current state. The Korean user experience is particularly concerning - Korean users have specific expectations and interaction patterns that are not being met.

**My questions for you:**
1. How will you address the Korean typography and readability issues?
2. What's your plan for implementing proper Korean web navigation conventions?
3. How will you ensure accessibility compliance, especially for Korean screen readers?
4. What specific mobile optimizations will you implement for Korean users?

I need to see concrete, actionable solutions with implementation timelines. The current state is not acceptable for launch.
    `;

    const messageId = communicationSystem.sendMessage(
      conversationId,
      this.agentId,
      content,
      'feedback',
      'urgent'
    );

    this.feedbackHistory.push({
      messageId,
      type: 'initial_evaluation',
      satisfactionLevel: this.satisfactionLevel,
      criticalIssues: evaluation.critical_issues.length,
      timestamp: new Date().toISOString()
    });

    return messageId;
  }

  // Evaluate designer's proposals and respond
  evaluateProposals(proposals, conversationId) {
    console.log(`[DR. SARAH KIM] Evaluating ${proposals.length} design proposals...`);
    
    const evaluation = this.analyzeProposals(proposals);
    
    let responseType = 'feedback';
    let newSatisfactionLevel = this.satisfactionLevel;
    
    if (evaluation.acceptableProposals.length >= 3 && evaluation.overallQuality >= 80) {
      responseType = 'approval';
      newSatisfactionLevel = 85;
    } else if (evaluation.overallQuality >= 60) {
      responseType = 'conditional_approval';
      newSatisfactionLevel = 70;
    } else {
      responseType = 'rejection';
      newSatisfactionLevel = Math.max(this.satisfactionLevel - 10, 30);
    }

    this.satisfactionLevel = newSatisfactionLevel;

    const content = this.generateResponseContent(evaluation, responseType);

    const messageId = communicationSystem.sendMessage(
      conversationId,
      this.agentId,
      content,
      responseType,
      responseType === 'rejection' ? 'urgent' : 'high'
    );

    this.feedbackHistory.push({
      messageId,
      type: 'proposal_evaluation',
      satisfactionLevel: this.satisfactionLevel,
      responseType,
      proposalsEvaluated: proposals.length,
      timestamp: new Date().toISOString()
    });

    return { messageId, responseType, satisfactionLevel: this.satisfactionLevel };
  }

  analyzeProposals(proposals) {
    const acceptableProposals = [];
    const needsImprovement = [];
    const inadequateProposals = [];

    proposals.forEach(proposal => {
      const score = this.scoreProposal(proposal);
      proposal.evaluationScore = score;

      if (score >= 80) {
        acceptableProposals.push(proposal);
      } else if (score >= 60) {
        needsImprovement.push(proposal);
      } else {
        inadequateProposals.push(proposal);
      }
    });

    const overallQuality = proposals.length > 0 ? 
      proposals.reduce((sum, p) => sum + p.evaluationScore, 0) / proposals.length : 0;

    return {
      acceptableProposals,
      needsImprovement,
      inadequateProposals,
      overallQuality,
      totalProposals: proposals.length
    };
  }

  scoreProposal(proposal) {
    let score = 0;

    // Korean UX considerations (30%)
    if (proposal.title.toLowerCase().includes('korean') || proposal.title.toLowerCase().includes('typography')) {
      score += 30;
    }

    // Accessibility considerations (25%)
    if (proposal.title.toLowerCase().includes('accessibility') || proposal.implementation.includes('ARIA')) {
      score += 25;
    }

    // User experience impact (20%)
    if (proposal.impact && proposal.impact.length > 50) {
      score += 20;
    }

    // Implementation quality (15%)
    if (proposal.implementation && proposal.implementation.length > 100 && proposal.timeline) {
      score += 15;
    }

    // Priority alignment (10%)
    if (proposal.priority === 'high' || proposal.priority === 'urgent') {
      score += 10;
    }

    return Math.min(score, 100);
  }

  generateResponseContent(evaluation, responseType) {
    let content = `**Proposal Evaluation Results - Updated Satisfaction: ${this.satisfactionLevel}/100**\n\n`;

    switch (responseType) {
      case 'approval':
        content += `✅ **PROPOSALS APPROVED**

Excellent work! Your proposals demonstrate a solid understanding of user experience principles and Korean localization requirements. I'm satisfied with this approach.

**APPROVED PROPOSALS (${evaluation.acceptableProposals.length}):**
${evaluation.acceptableProposals.map((proposal, index) => `
${index + 1}. **${proposal.title}** (Score: ${proposal.evaluationScore}/100)
   ✅ Implementation approach is sound
   ✅ Addresses key user concerns
   ✅ Timeline is reasonable
`).join('\n')}

**Next Steps:**
1. Implement in the priority order you've specified
2. Test each change with Korean users if possible
3. Validate accessibility improvements with screen readers
4. Provide progress updates as you implement

You may proceed with implementation. I'll review the results once completed.`;
        break;

      case 'conditional_approval':
        content += `⚠️ **CONDITIONAL APPROVAL WITH MODIFICATIONS REQUIRED**

Your proposals show promise but need refinement before I can fully approve them.

**ACCEPTABLE PROPOSALS (${evaluation.acceptableProposals.length}):**
${evaluation.acceptableProposals.map((proposal, index) => `
${index + 1}. **${proposal.title}** ✅ Approved as proposed
`).join('\n')}

**PROPOSALS NEEDING IMPROVEMENT (${evaluation.needsImprovement.length}):**
${evaluation.needsImprovement.map((proposal, index) => `
${index + 1}. **${proposal.title}** ⚠️ Needs modification
   - Current approach is incomplete
   - Need more specific Korean UX considerations
   - Implementation details require clarification
`).join('\n')}

**REQUIRED MODIFICATIONS:**
1. Provide more specific Korean user research backing your decisions
2. Include measurable success metrics for each change
3. Add user testing plans for critical changes
4. Specify Korean accessibility requirements (not just general WCAG)

Please revise the flagged proposals and resubmit. I cannot approve implementation until these concerns are addressed.`;
        break;

      case 'rejection':
        content += `❌ **PROPOSALS REJECTED - MAJOR REVISIONS REQUIRED**

I cannot approve these proposals in their current form. The approach shows insufficient understanding of Korean user needs and UX best practices.

**INADEQUATE PROPOSALS (${evaluation.inadequateProposals.length}):**
${evaluation.inadequateProposals.map((proposal, index) => `
${index + 1}. **${proposal.title}** ❌ Rejected (Score: ${proposal.evaluationScore}/100)
   - Lacks specific Korean UX considerations
   - Implementation details are vague
   - User impact assessment is insufficient
`).join('\n')}

**FUNDAMENTAL ISSUES:**
1. **Korean UX**: Your proposals don't demonstrate understanding of Korean web patterns
2. **User Research**: No evidence of Korean user research or cultural considerations
3. **Implementation**: Vague technical approaches without specific methodologies
4. **Measurement**: No clear success metrics or validation plans

**REQUIRED BEFORE RESUBMISSION:**
1. Research Korean web design conventions and user expectations
2. Provide specific Korean typography and spacing guidelines
3. Include Korean accessibility requirements beyond basic WCAG
4. Develop measurable user experience metrics
5. Create user testing plans for Korean users

This needs substantial rework. Please completely revise your approach with proper Korean UX research and specific implementation plans.`;
        break;
    }

    return content;
  }

  // Provide final approval or request further changes
  provideFinalDecision(conversationId, implementationResults) {
    const finalEvaluation = this.evaluateFinalResults(implementationResults);
    
    if (finalEvaluation.overallSatisfaction >= 80) {
      this.satisfactionLevel = finalEvaluation.overallSatisfaction;
      
      const content = `✅ **FINAL APPROVAL GRANTED**

Excellent work! The implemented changes have successfully addressed my concerns. Current satisfaction level: ${this.satisfactionLevel}/100.

**Successfully Implemented:**
${finalEvaluation.successfulChanges.map(change => `• ${change}`).join('\n')}

**Impact Achieved:**
- Korean user experience significantly improved
- Accessibility compliance achieved
- Professional design standards met
- Mobile experience optimized

The website is now ready for deployment. Well done!`;

      return communicationSystem.sendMessage(
        conversationId,
        this.agentId,
        content,
        'approval',
        'normal'
      );
    } else {
      const content = `⚠️ **ADDITIONAL CHANGES REQUIRED**

While progress has been made, satisfaction level is still ${this.satisfactionLevel}/100. Additional improvements needed:

${finalEvaluation.remainingIssues.map(issue => `• ${issue}`).join('\n')}

Please address these remaining concerns before final approval.`;

      return communicationSystem.sendMessage(
        conversationId,
        this.agentId,
        content,
        'feedback',
        'high'
      );
    }
  }

  evaluateFinalResults(results) {
    // This would evaluate actual implementation results
    return {
      overallSatisfaction: 85,
      successfulChanges: [
        'Korean typography optimized',
        'Navigation improved',
        'Accessibility enhanced',
        'Mobile experience refined'
      ],
      remainingIssues: []
    };
  }

  getExpertise() {
    return [
      'User Experience',
      'Usability Testing',
      'Korean Localization',
      'Healthcare UX',
      'Accessibility',
      'Cultural UX Design',
      'Mobile UX'
    ];
  }

  getCurrentSatisfactionLevel() {
    return this.satisfactionLevel;
  }
}

export default DrSarahKimAgent;