/**
 * @name Relox
 * @version 0.0.1
 * @description Just a simple description of the content that may
 * end up being pretty long
 * 
 * @website https://relox.xyz
 */

class Relox {
    getName() {return "Relox";}
    getDescription() {return "Does things with the library";}
    getVersion() {return "0.0.1";}
    getAuthor() {return "Myself";}

    start() {
        console.log("Relox has started");
        BdApi.showToast("Relox has started");
        BdApi.showConfirmationModal("Test", 
    [
        "This is not a link. ",
        BdApi.React.createElement("a", {href: "https://google.com", target: "_blank"}, "This is a link."), 
        " This is not."
    ],
    {
        danger: true,
        confirmText: "Oh No",
        cancelText: "Go Back"
    }
);
    }

    stop() {

	}
}