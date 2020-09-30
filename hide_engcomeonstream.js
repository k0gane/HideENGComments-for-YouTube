function DelEngComment(){
    let elms__ = document.querySelectorAll("[id='message']");
    const japa = /[\u{3000}-\u{301C}\u{3041}-\u{3093}\u{309B}-\u{309E}]/mu;
    for(let i = 0; i < elms__.length; i++){
        console.log(elms__[i].innerHTML);
        //content[i] = content[i].split('<span dir="auto" class="style-scope yt-formatted-string">').join('');
        //content[i] = content[i].split('</span>').join('');
        if(!(japa.test(elms__[i].innerHTML)) && (elms__[i].innerHTML.indexOf('</path>') == -1)){
            elms__[i].parentNode.parentNode.remove();
        }
    }
}

function initialize(){
    let observer = new MutationObserver(DelEngComment);
    observer.observe(document.getElementById('chat-messages'), {
       attributes: true,
       childList:  true
    });
}

window.onload = function(){
    initialize();
    DelEngComment();
}