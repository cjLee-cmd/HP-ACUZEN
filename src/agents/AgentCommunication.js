/**
 * Inter-Agent Communication System
 * Facilitates structured dialogue between web designer and user agents
 */

class AgentMessage {
  constructor(sender, content, messageType, priority = 'normal', references = []) {
    this.id = Date.now() + Math.random().toString(36).substr(2, 9);
    this.sender = sender;
    this.content = content;
    this.messageType = messageType; // 'feedback', 'proposal', 'question', 'approval', 'rejection'
    this.priority = priority; // 'low', 'normal', 'high', 'urgent'
    this.references = references; // Array of code references, design elements
    this.timestamp = new Date().toISOString();
    this.status = 'pending'; // 'pending', 'acknowledged', 'implemented'
  }
}

class DesignReference {
  constructor(element, file, lineNumber, description) {
    this.element = element;
    this.file = file;
    this.lineNumber = lineNumber;
    this.description = description;
  }
}

class ConversationContext {
  constructor() {
    this.conversationId = Date.now().toString(36);
    this.participants = [];
    this.messages = [];
    this.currentTopic = null;
    this.priority = 'normal';
    this.status = 'active'; // 'active', 'paused', 'completed'
    this.agreementReached = false;
    this.nextSteps = [];
  }

  addParticipant(agentId, role, expertise) {
    this.participants.push({
      agentId,
      role,
      expertise,
      joinedAt: new Date().toISOString()
    });
  }

  addMessage(message) {
    this.messages.push(message);
    this.updateContext(message);
  }

  updateContext(message) {
    // Update conversation status based on message content
    if (message.messageType === 'approval' && message.sender === 'dr-sarah-kim') {
      this.agreementReached = true;
      this.status = 'completed';
    }
  }

  getConversationSummary() {
    return {
      id: this.conversationId,
      participantCount: this.participants.length,
      messageCount: this.messages.length,
      status: this.status,
      agreementReached: this.agreementReached,
      currentTopic: this.currentTopic,
      lastActivity: this.messages.length > 0 ? this.messages[this.messages.length - 1].timestamp : null
    };
  }
}

class CommunicationProtocol {
  constructor() {
    this.activeConversations = new Map();
    this.messageQueue = [];
    this.agents = new Map();
  }

  registerAgent(agentId, profile) {
    this.agents.set(agentId, {
      ...profile,
      isActive: false,
      lastActivity: null
    });
  }

  createConversation(topic, priority = 'normal') {
    const conversation = new ConversationContext();
    conversation.currentTopic = topic;
    conversation.priority = priority;
    this.activeConversations.set(conversation.conversationId, conversation);
    return conversation.conversationId;
  }

  sendMessage(conversationId, sender, content, messageType, priority = 'normal', references = []) {
    const conversation = this.activeConversations.get(conversationId);
    if (!conversation) {
      throw new Error(`Conversation ${conversationId} not found`);
    }

    const message = new AgentMessage(sender, content, messageType, priority, references);
    conversation.addMessage(message);
    this.messageQueue.push(message);

    // Notify relevant agents
    this.notifyAgents(conversationId, message);

    return message.id;
  }

  notifyAgents(conversationId, message) {
    const conversation = this.activeConversations.get(conversationId);
    conversation.participants.forEach(participant => {
      if (participant.agentId !== message.sender) {
        console.log(`[NOTIFICATION] ${participant.agentId}: New ${message.messageType} from ${message.sender}`);
      }
    });
  }

  getConversation(conversationId) {
    return this.activeConversations.get(conversationId);
  }

  getRecentMessages(conversationId, limit = 10) {
    const conversation = this.activeConversations.get(conversationId);
    if (!conversation) return [];
    
    return conversation.messages
      .slice(-limit)
      .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
  }
}

// Initialize the communication system
const communicationSystem = new CommunicationProtocol();

// Register agents
communicationSystem.registerAgent('web-designer', {
  name: 'Web Designer Agent',
  role: 'Design Specialist',
  expertise: ['UI/UX Design', 'React Components', 'CSS Styling', 'Responsive Design', 'Accessibility'],
  communicationStyle: 'Technical and solution-oriented'
});

communicationSystem.registerAgent('dr-sarah-kim', {
  name: 'Dr. Sarah Kim',
  role: 'User Experience Evaluator',
  expertise: ['User Experience', 'Usability', 'Korean Localization', 'Healthcare UX', 'Accessibility'],
  communicationStyle: 'Critical and user-focused'
});

export { 
  AgentMessage, 
  DesignReference, 
  ConversationContext, 
  CommunicationProtocol, 
  communicationSystem 
};