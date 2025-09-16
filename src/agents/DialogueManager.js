/**
 * Dialogue Manager
 * Orchestrates structured conversations between agents
 */

import { communicationSystem } from './AgentCommunication.js';
import WebDesignerAgent from './WebDesignerAgent.js';
import DrSarahKimAgent from './DrSarahKimAgent.js';

class DialogueManager {
  constructor() {
    this.webDesigner = new WebDesignerAgent();
    this.drSarahKim = new DrSarahKimAgent();
    this.activeDialogue = null;
    this.dialogueHistory = [];
    this.maxIterations = 10;
    this.currentIteration = 0;
  }

  // Start a design review dialogue
  startDesignReviewDialogue(topic = 'Website Design Review and Improvement') {
    console.log(`\n=== STARTING DESIGN REVIEW DIALOGUE ===`);
    console.log(`Topic: ${topic}`);
    console.log(`Participants: Web Designer Agent & Dr. Sarah Kim\n`);

    // Initialize conversation
    const conversationId = this.webDesigner.initiateDesignReview(topic);
    this.drSarahKim.joinConversation(conversationId);
    this.activeDialogue = conversationId;
    this.currentIteration = 0;

    // Start the dialogue flow
    this.executeDialogueFlow();

    return conversationId;
  }

  // Execute the structured dialogue flow
  async executeDialogueFlow() {
    try {
      // Phase 1: Designer sends initial assessment
      console.log(`\n--- PHASE 1: INITIAL DESIGN ASSESSMENT ---`);
      const assessmentMessageId = this.webDesigner.sendDesignAssessment(this.activeDialogue);
      console.log(`✅ Web Designer sent initial assessment`);

      // Phase 2: Dr. Sarah Kim provides critical feedback
      console.log(`\n--- PHASE 2: USER EXPERIENCE EVALUATION ---`);
      const feedbackMessageId = this.drSarahKim.sendInitialFeedback(this.activeDialogue);
      console.log(`✅ Dr. Sarah Kim provided critical feedback`);

      // Phase 3: Iterative improvement cycle
      await this.runImprovementCycle();

    } catch (error) {
      console.error(`Dialogue execution error:`, error);
      this.handleDialogueError(error);
    }
  }

  // Run iterative improvement cycle
  async runImprovementCycle() {
    console.log(`\n--- PHASE 3: ITERATIVE IMPROVEMENT CYCLE ---`);
    
    while (this.currentIteration < this.maxIterations) {
      this.currentIteration++;
      console.log(`\n> Iteration ${this.currentIteration}/${this.maxIterations}`);

      // Get the latest feedback from Dr. Sarah Kim
      const recentMessages = communicationSystem.getRecentMessages(this.activeDialogue, 3);
      const latestFeedback = recentMessages
        .filter(msg => msg.sender === 'dr-sarah-kim' && 
                      (msg.messageType === 'feedback' || msg.messageType === 'rejection'))
        .pop();

      if (!latestFeedback) {
        console.log(`No feedback found to respond to`);
        break;
      }

      // Designer responds with proposals
      console.log(`📝 Web Designer creating proposals...`);
      const proposalMessageId = this.webDesigner.respondToFeedback(
        this.activeDialogue, 
        latestFeedback.content
      );

      // Get the proposals from the designer's response
      const proposals = this.webDesigner.designProposals;
      
      if (proposals.length === 0) {
        console.log(`⚠️ No proposals generated, ending cycle`);
        break;
      }

      console.log(`📋 Generated ${proposals.length} proposals`);

      // Dr. Sarah Kim evaluates proposals
      console.log(`🔍 Dr. Sarah Kim evaluating proposals...`);
      const evaluation = this.drSarahKim.evaluateProposals(proposals, this.activeDialogue);
      
      console.log(`📊 Evaluation result: ${evaluation.responseType}, satisfaction: ${evaluation.satisfactionLevel}/100`);

      // Check if agreement is reached
      if (evaluation.responseType === 'approval') {
        console.log(`\n🎉 AGREEMENT REACHED! Dr. Sarah Kim has approved the proposals.`);
        this.finalizeDialogue('agreement_reached');
        break;
      } else if (evaluation.satisfactionLevel >= 85) {
        console.log(`\n✅ HIGH SATISFACTION ACHIEVED! Moving to implementation.`);
        this.finalizeDialogue('high_satisfaction');
        break;
      } else if (evaluation.responseType === 'rejection' && evaluation.satisfactionLevel < 40) {
        console.log(`\n⚠️ MAJOR ISSUES DETECTED! Satisfaction too low (${evaluation.satisfactionLevel}/100)`);
        console.log(`Requiring fundamental approach revision...`);
        continue;
      }

      // Brief pause to simulate real conversation timing
      await this.simulateThinkingTime(1000);
    }

    if (this.currentIteration >= this.maxIterations) {
      console.log(`\n⏰ Maximum iterations reached. Dialogue needs manual intervention.`);
      this.finalizeDialogue('max_iterations_reached');
    }
  }

  // Finalize the dialogue with summary
  finalizeDialogue(reason) {
    console.log(`\n=== DIALOGUE FINALIZATION ===`);
    console.log(`Reason: ${reason}`);
    console.log(`Total iterations: ${this.currentIteration}`);
    
    const conversation = communicationSystem.getConversation(this.activeDialogue);
    const summary = conversation.getConversationSummary();
    
    console.log(`\n--- CONVERSATION SUMMARY ---`);
    console.log(`Messages exchanged: ${summary.messageCount}`);
    console.log(`Agreement reached: ${summary.agreementReached}`);
    console.log(`Final status: ${summary.status}`);
    console.log(`Dr. Sarah Kim satisfaction: ${this.drSarahKim.getCurrentSatisfactionLevel()}/100`);

    // Generate implementation roadmap if agreement reached
    if (reason === 'agreement_reached' || reason === 'high_satisfaction') {
      this.generateImplementationRoadmap();
    }

    this.dialogueHistory.push({
      conversationId: this.activeDialogue,
      reason,
      iterations: this.currentIteration,
      finalSatisfaction: this.drSarahKim.getCurrentSatisfactionLevel(),
      summary,
      completedAt: new Date().toISOString()
    });

    this.activeDialogue = null;
  }

  // Generate implementation roadmap from approved proposals
  generateImplementationRoadmap() {
    console.log(`\n--- IMPLEMENTATION ROADMAP ---`);
    const proposals = this.webDesigner.designProposals;
    const approvedProposals = proposals.filter(p => p.evaluationScore >= 80);

    if (approvedProposals.length > 0) {
      console.log(`\n📋 APPROVED CHANGES (${approvedProposals.length}):`);
      
      approvedProposals
        .sort((a, b) => this.webDesigner.getPriorityWeight(b.priority) - this.webDesigner.getPriorityWeight(a.priority))
        .forEach((proposal, index) => {
          console.log(`${index + 1}. ${proposal.title} (${proposal.priority} priority)`);
          console.log(`   Timeline: ${proposal.timeline}`);
          console.log(`   Files: ${proposal.files ? proposal.files.join(', ') : 'TBD'}`);
        });

      console.log(`\n🚀 NEXT STEPS:`);
      console.log(`1. Implement changes in priority order`);
      console.log(`2. Test each change thoroughly`);
      console.log(`3. Validate with Korean users if possible`);
      console.log(`4. Ensure accessibility compliance`);
      console.log(`5. Performance optimization`);
      console.log(`6. Final review with Dr. Sarah Kim`);
    } else {
      console.log(`⚠️ No approved proposals found for implementation`);
    }
  }

  // Simulate natural conversation timing
  simulateThinkingTime(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Handle dialogue errors gracefully
  handleDialogueError(error) {
    console.error(`\n❌ DIALOGUE ERROR OCCURRED`);
    console.error(`Error: ${error.message}`);
    console.log(`\nAttempting recovery...`);
    
    // Log error and attempt to continue or restart
    this.dialogueHistory.push({
      conversationId: this.activeDialogue,
      error: error.message,
      errorAt: this.currentIteration,
      timestamp: new Date().toISOString(),
      status: 'error'
    });
  }

  // Get dialogue status and progress
  getDialogueStatus() {
    if (!this.activeDialogue) {
      return {
        status: 'inactive',
        message: 'No active dialogue'
      };
    }

    const conversation = communicationSystem.getConversation(this.activeDialogue);
    const summary = conversation.getConversationSummary();
    
    return {
      status: 'active',
      conversationId: this.activeDialogue,
      currentIteration: this.currentIteration,
      maxIterations: this.maxIterations,
      drSarahKimSatisfaction: this.drSarahKim.getCurrentSatisfactionLevel(),
      messageCount: summary.messageCount,
      agreementReached: summary.agreementReached
    };
  }

  // Get full conversation transcript
  getConversationTranscript(conversationId = null) {
    const targetConversation = conversationId || this.activeDialogue;
    if (!targetConversation) return null;

    const conversation = communicationSystem.getConversation(targetConversation);
    return {
      conversationId: targetConversation,
      topic: conversation.currentTopic,
      participants: conversation.participants,
      messages: conversation.messages.map(msg => ({
        sender: msg.sender,
        content: msg.content,
        type: msg.messageType,
        timestamp: msg.timestamp,
        priority: msg.priority
      })),
      summary: conversation.getConversationSummary()
    };
  }
}

export default DialogueManager;