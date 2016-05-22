// adds a new idea to the list
function addNewIdea(idea) {
    console.log()
    getIdeas(function(items) {

        var ideas = items['ideas'];

        ideas.push(idea);
        chrome.storage.sync.set({'ideas': ideas}, function() {
            console.log("Nice Idea!");
        });
    });
}
// removes the idea from the list
function removeIdea(idea) {

}
// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(function(text) {
    addNewIdea(text);
    console.log('inputEntered: ' + text);
    alert('You just typed "' + text + '"');
});

function getIdeas(callback) {
    chrome.storage.sync.get({ideas: []}, callback)
}

function displayIdeas(starting) {
    getIdeas(function(items) {
        var ideas = items['ideas'];
        var ideaList = document.getElementById("ideaList");
        if (!ideaList) {
            console.log('no idea');

        } else {
            // empty the DOM object
            while (ideaList.firstChild) ideaList.removeChild(ideaList.firstChild);
        }

        // populate the DOM object
        console.log(ideas);
        for(var i = starting; i < ideas.length; i++){
            var listItem = document.createElement("LI");
            listItem.className = 'list-group-item';
            listItem.innerHTML = ideas[i];
            console.log("appending", listItem.innerHTML);
            ideaList.appendChild(listItem);
        }
    })
}
window.addEventListener('DOMContentLoaded', function() {
    displayIdeas(0);
});

// function onPopupLoad
