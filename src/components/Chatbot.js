  window.watsonAssistantChatOptions = {
      integrationID: "1ada3eb4-81a7-4194-9557-db0c595e849a", // The ID of this integration.
      region: "eu-gb", // The region your integration is hosted in.
      serviceInstanceID: "7c9a999a-1921-4658-ad03-3a53a38e613a", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  });