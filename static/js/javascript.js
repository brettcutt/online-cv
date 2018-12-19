// Check if the browser is edge and if it is, set the background attachment to scroll to avoid background turning white.

function Check_Version() {
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
        document.getElementById("history-page").setAttribute("style", "background-attachment: scroll; background-size: auto;");

        document.getElementById("skills-page").style.backgroundAttachment = "scroll";
    } else {
        document.getElementById("history-page").setAttribute("style", "background-attachment: fixed; background-size: cover;");
        document.getElementById("skills-page").style.backgroundAttachment = "fixed";
    }
}

Check_Version()