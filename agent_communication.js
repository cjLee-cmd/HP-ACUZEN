// Sub-Agent Communication System
class AgentCommunicator {
  constructor() {
    this.conversations = [];
    this.currentTurn = 0;
    this.agents = {
      webDesigner: {
        name: "Alex Chen",
        role: "Senior Web Designer",
        expertise: ["UI/UX", "React", "Internationalization", "Accessibility"],
        personality: "Detail-oriented, user-focused, technical problem solver"
      },
      userAgent: {
        name: "Dr. Sarah Kim",
        role: "UX Research Director & International User Representative",
        expertise: ["User Research", "Cross-cultural UX", "Healthcare UX", "Accessibility"],
        personality: "Critical, user-advocate, culturally aware, accessibility champion"
      }
    };
    this.websiteState = null;
  }

  logMessage(agent, message) {
    const timestamp = new Date().toLocaleTimeString();
    const conversation = {
      turn: ++this.currentTurn,
      timestamp,
      agent,
      message,
      type: 'dialogue'
    };
    this.conversations.push(conversation);
    console.log(`[Turn ${this.currentTurn}] ${agent}: ${message}`);
    return conversation;
  }

  logAnalysis(agent, analysis) {
    const timestamp = new Date().toLocaleTimeString();
    const analysisLog = {
      turn: ++this.currentTurn,
      timestamp,
      agent,
      analysis,
      type: 'analysis'
    };
    this.conversations.push(analysisLog);
    console.log(`[Turn ${this.currentTurn}] ${agent} Analysis:`, analysis);
    return analysisLog;
  }

  getConversationHistory() {
    return this.conversations;
  }

  summarizeProgress() {
    const issues = this.conversations
      .filter(c => c.type === 'dialogue' && c.message.includes('issue') || c.message.includes('problem'))
      .length;
    
    const solutions = this.conversations
      .filter(c => c.type === 'dialogue' && c.message.includes('solution') || c.message.includes('implement'))
      .length;

    return {
      totalTurns: this.currentTurn,
      issuesIdentified: issues,
      solutionsProposed: solutions,
      activeAgents: Object.keys(this.agents).length
    };
  }
}

// Initialize the communication system
const agentComm = new AgentCommunicator();

// Export for use in Node.js or browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AgentCommunicator;
}

console.log("Agent Communication System initialized");
console.log("Agents:", agentComm.agents);