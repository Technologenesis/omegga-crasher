class Crasher {
    constructor(omegga, config) {
        this.omegga = omegga;
        this.config = config;
    }

    async init() {
        console.log("You've loaded the crasher plugin! Use at own risk.");
        console.log("This plugin includes a chat callback and a /crash command.");
        console.log("The crash command crashes the plugin; after the plugin is loaded again, there will be an extra instance running.");
        console.log("You can verify this fact by observing that the chat callback will be called an extra time.");

        this.omegga.on("cmd:crash", (name) => {
            this.omegga.whisper("About to crash plugin. On reload, an extra instance of the plugin should be running.");

            setTimeout(() => {
                undefined.access();
            }, 500);
        });

        this.omegga.on("chat", (name, msg) => {
            this.omegga.whisper(name, "crasher received chat msg: " + msg);
        });

        console.log("Crasher init complete");
    }

    async stop() {}
}

module.exports = Crasher