/**
 * Dialogue Runner
 * Demonstrates the inter-agent communication system
 */

import DialogueManager from './DialogueManager.js';

// Create and run the design review dialogue
async function runDesignReviewDialogue() {
  console.log(`
╔════════════════════════════════════════════════════════════════════════════════╗
║                     INTER-AGENT DESIGN REVIEW DIALOGUE                        ║
║                                                                                ║
║  Participants:                                                                 ║
║  • Web Designer Agent - Technical design specialist                           ║
║  • Dr. Sarah Kim - UX evaluator and Korean localization expert               ║
║                                                                                ║
║  Objective: Collaborative website improvement through structured dialogue     ║
╚════════════════════════════════════════════════════════════════════════════════╝
  `);

  const dialogueManager = new DialogueManager();
  
  try {
    // Start the design review dialogue
    const conversationId = dialogueManager.startDesignReviewDialogue(
      'Comprehensive Website UX Review and Korean Localization Optimization'
    );

    // Monitor dialogue progress
    const checkProgress = setInterval(() => {
      const status = dialogueManager.getDialogueStatus();
      if (status.status === 'inactive') {
        clearInterval(checkProgress);
        console.log(`\n🏁 Dialogue completed!`);
        
        // Get final transcript
        const transcript = dialogueManager.getConversationTranscript();
        displayDialogueSummary(transcript);
      }
    }, 2000);

  } catch (error) {
    console.error(`Failed to run dialogue:`, error);
  }
}

// Display a comprehensive dialogue summary
function displayDialogueSummary(transcript) {
  console.log(`
╔════════════════════════════════════════════════════════════════════════════════╗
║                           DIALOGUE SUMMARY                                     ║
╚════════════════════════════════════════════════════════════════════════════════╝
  `);

  console.log(`📊 Conversation Statistics:`);
  console.log(`   • Conversation ID: ${transcript.conversationId}`);
  console.log(`   • Topic: ${transcript.topic}`);
  console.log(`   • Total Messages: ${transcript.messages.length}`);
  console.log(`   • Participants: ${transcript.participants.length}`);
  console.log(`   • Duration: ${calculateDialogueDuration(transcript)}`);

  console.log(`\n💬 Message Breakdown:`);
  const messageStats = analyzeMessageTypes(transcript.messages);
  Object.entries(messageStats).forEach(([type, count]) => {
    console.log(`   • ${type}: ${count} messages`);
  });

  console.log(`\n🔄 Conversation Flow:`);
  transcript.messages.forEach((message, index) => {
    const timestamp = new Date(message.timestamp).toLocaleTimeString();
    const senderIcon = message.sender === 'web-designer' ? '🎨' : '👩‍⚕️';
    const typeIcon = getMessageTypeIcon(message.type);
    
    console.log(`   ${index + 1}. [${timestamp}] ${senderIcon} ${message.sender} ${typeIcon} ${message.type}`);
  });

  console.log(`\n📋 Final Status:`);
  console.log(`   • Agreement Reached: ${transcript.summary.agreementReached ? '✅' : '❌'}`);
  console.log(`   • Conversation Status: ${transcript.summary.status}`);
  
  displayKeyInsights(transcript);
}

function calculateDialogueDuration(transcript) {
  if (transcript.messages.length < 2) return 'Less than 1 minute';
  
  const start = new Date(transcript.messages[0].timestamp);
  const end = new Date(transcript.messages[transcript.messages.length - 1].timestamp);
  const diffMinutes = Math.ceil((end - start) / (1000 * 60));
  
  return diffMinutes <= 1 ? 'Less than 1 minute' : `${diffMinutes} minutes`;
}

function analyzeMessageTypes(messages) {
  return messages.reduce((stats, message) => {
    stats[message.type] = (stats[message.type] || 0) + 1;
    return stats;
  }, {});
}

function getMessageTypeIcon(type) {
  const icons = {
    'proposal': '💡',
    'feedback': '📝',
    'approval': '✅',
    'rejection': '❌',
    'question': '❓',
    'conditional_approval': '⚠️'
  };
  return icons[type] || '💬';
}

function displayKeyInsights(transcript) {
  console.log(`\n🔍 Key Insights from Dialogue:`);
  
  const proposalMessages = transcript.messages.filter(m => m.type === 'proposal');
  const feedbackMessages = transcript.messages.filter(m => m.type === 'feedback');
  const approvalMessages = transcript.messages.filter(m => m.type === 'approval');
  
  console.log(`   • Design Proposals Generated: ${proposalMessages.length}`);
  console.log(`   • Feedback Iterations: ${feedbackMessages.length}`);
  console.log(`   • Approvals Given: ${approvalMessages.length}`);
  
  if (transcript.summary.agreementReached) {
    console.log(`   • 🎉 Successful collaboration with mutual agreement`);
    console.log(`   • 🚀 Ready for implementation phase`);
  } else {
    console.log(`   • ⚠️ Additional iterations may be needed`);
    console.log(`   • 🔄 Consider manual review of remaining issues`);
  }

  console.log(`
╔════════════════════════════════════════════════════════════════════════════════╗
║                     DIALOGUE SYSTEM DEMONSTRATION COMPLETE                    ║
║                                                                                ║
║  The inter-agent communication system successfully facilitated:               ║
║  ✅ Structured communication between specialized agents                       ║
║  ✅ Context-aware dialogue management                                         ║
║  ✅ Professional design review process                                        ║
║  ✅ Iterative improvement cycles                                              ║
║  ✅ Concrete actionable outcomes                                              ║
║                                                                                ║
║  This system can be extended for any collaborative AI workflow requiring      ║
║  structured communication and agreement protocols.                            ║
╚════════════════════════════════════════════════════════════════════════════════╝
  `);
}

// Export for external use
export { runDesignReviewDialogue, displayDialogueSummary };

// Run demonstration if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runDesignReviewDialogue().catch(console.error);
}