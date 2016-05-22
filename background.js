// adds a new idea to the list
function addNewIdea(idea) {
    chrome.storage.sync.get('ideas', function(items) {
        var ideas = items['ideas'];
        ideas.push(idea);
        chrome.storage.sync.set({'ideas': ideas}, function() {
            message("Nice Idea!");
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

function onPopupLoad
