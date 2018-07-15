
document.addEventListener('DOMContentLoaded', () => {
    let tabId;
    let nameElement = document.querySelector('.candidate-name');
    let jobsElement = document.querySelector('.candidate-jobs');

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        tabId = tabs[0].id;
        chrome.tabs.executeScript(tabId, { file: 'page.js' });
    });

    document.querySelector('.start-button').addEventListener('click', () => { 

        chrome.tabs.sendMessage(tabId, { topic: 'get-next-candidate' }, {}, (candidate) => {
            nameElement.innerHTML = candidate.name;
            candidate.jobs.forEach(job => {
                let li = document.createElement('li');
                let jobName = document.createElement('div');
                let jobDescription = document.createElement('div');
                jobsElement.appendChild(li);
                li.appendChild(jobName);
                li.appendChild(jobDescription);

                jobName.innerHTML = job.name;
                jobDescription.innerHTML = job.description;                
            })
        })
    });
});