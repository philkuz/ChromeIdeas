function getIdeas(callback) {
    chrome.storage.sync.get({ideas: []}, callback)
}
function displayIdeas(starting, numberOfIdeas) {
    getIdeas(function(items) {
        var ideas = items['ideas'];
        var ideaList = document.getElementById("idea-list");
        if (!ideaList) {
            console.log('no idea');

        } else {
            // empty the DOM object
            while (ideaList.firstChild) ideaList.removeChild(ideaList.firstChild);
        }

        // populate the DOM object
        console.log(ideas);
        for(var i = starting; i < ideas.length && i < starting + numberOfIdeas; i++){
            var listItem = document.createElement("LI");
            listItem.className = 'list-group-item';
            listItem.innerHTML = ideas[i];
            console.log("appending", listItem.innerHTML);
            ideaList.appendChild(listItem);
        }
    })
}
window.addEventListener('DOMContentLoaded', function() {
    displayIdeas(0, 5);
});
