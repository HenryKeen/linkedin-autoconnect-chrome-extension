
var getNextCandidate = () => {


    var candidateLinks = document.querySelectorAll('.search-result__result-link');

    candidateLinks.forEach(link => {
        console.log('blah: ' + link.href);
    });

}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    
    if(request.topic == 'get-next-candidate'){
        sendResponse({ name: 'Arnie', jobs: [{ name: 'Just Eat', description: 'TDD' }] })
    }
})