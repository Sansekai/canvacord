// generated by JSDOC

declare module "canvacord" {
    import Canvas from 'canvas'
    /**
    * <p><strong>⚠ You may not instantiate Canvacord class! ⚠</strong></p>
    * @example
    * const Canvacord = require("canvacord");
  
    Canvacord.Canvas.trigger("./image.png")
    .then(triggered => {
        Canvacord.write(triggered, "triggered.gif");
    })
    */
    export class Canvacord {
        /**
         * <p>This method can be used to apply Triggered effect on image.</p>
         * @param image - <p>Image to trigger</p>
         */
        static trigger(image: string | Buffer): Promise<Buffer>;
        /**
         * <p>Inverts color of the image</p>
         * @param image - <p>Img to invert</p>
         */
        static invert(image: string | Buffer): Promise<Buffer>;
        /**
         * <p>Apply sepia wash on img</p>
         * @param image - <p>Img</p>
         */
        static sepia(image: string | Buffer): Promise<Buffer>;
        /**
         * <p>Greyscale effect over image</p>
         * @param image - <p>Img</p>
         */
        static greyscale(image: string | Buffer): Promise<Buffer>;
        /**
         * <p>Edit image brightness</p>
         * @param image - <p>Img</p>
         * @param amount - <p>Brightness amount</p>
         */
        static brightness(image: string | Buffer, amount: number): Promise<Buffer>;
        /**
         * <p>Edit image darkness</p>
         * @param image - <p>Img</p>
         * @param amount - <p>Darkness amount</p>
         */
        static darkness(image: string | Buffer, amount: number): Promise<Buffer>;
        /**
         * <p>Image threshold</p>
         * @param img - <p>Image</p>
         * @param amount - <p>Threshold amount</p>
         */
        static threshold(img: string | Buffer, amount: number): Promise<Buffer>;
        /**
         * <p>Image Convolution</p>
         * @param img - <p>Image</p>
         * @param matrix - <p>Convolution matrix</p>
         * @param opaque - <p>If convolution should be opaque</p>
         */
        static convolute(img: string | Buffer, matrix: number[], opaque: boolean): Promise<Buffer>;
        /**
         * <p>Creates Progress bar</p>
         * @param track - <p>Progressbar track options</p>
         * @param [track.x] - <p>The x-axis</p>
         * @param [track.y] - <p>The y-axis</p>
         * @param [track.width] - <p>Progressbar track width</p>
         * @param [track.height] - <p>Progressbar track height</p>
         * @param [track.color] - <p>Progressbar track color</p>
         * @param [track.stroke] - <p>Use stroke for track</p>
         * @param [track.lineWidth] - <p>This param will be used if <code>track.stroke</code> is set to <code>true</code></p>
         * @param bar - <p>Progressbar options</p>
         * @param [bar.width] - <p>Progressbar width</p>
         * @param [bar.color] - <p>Progressbar color</p>
         */
        static createProgressBar(track: {
            x?: number;
            y?: number;
            width?: number;
            height?: number;
            color?: string;
            stroke?: boolean;
            lineWidth?: number;
        }, bar: {
            width?: number;
            color?: string;
        }): Buffer;
        /**
         * <p>Blur an image</p>
         * @param image - <p>Image to blur</p>
         */
        static blur(image: string | Buffer): Promise<Buffer>;
        /**
         * <p>Pixelate</p>
         * @param image - <p>Image to pixelate</p>
         * @param pixels - <p>Pixels</p>
         */
        static pixelate(image: string | Buffer, pixels?: number): Promise<Buffer>;
        /**
         * <p>Sharpen an image</p>
         * @param image - <p>Image to sharpen</p>
         * @param lvl - <p>sharpness intensity</p>
         */
        static sharpen(image: string | Buffer, lvl?: number): Promise<Buffer>;
        /**
         * <p>Applies burn effect on an image</p>
         * @param image - <p>Image source</p>
         * @param lvl - <p>intensity</p>
         */
        static burn(image: string | Buffer, lvl?: number): Promise<Buffer>;
        /**
         * <p>HTML5 color to image</p>
         * @param color - <p>HTML5 color</p>
         * @param displayHex - <p>If it should display hex</p>
         * @param height - <p>Image height</p>
         * @param width - <p>Image width</p>
         */
        static color(color?: string, displayHex?: boolean, height?: number, width?: number): Buffer;
        /**
         * <p>Creates circular image</p>
         * @param image - <p>Image source</p>
         */
        static circle(image: string | Buffer): Promise<Buffer>;
        /**
         * <p>Creates a rectangle</p>
         * @param x - <p>x-axis</p>
         * @param y - <p>y-axis</p>
         * @param width - <p>width</p>
         * @param height - <p>height</p>
         * @param color - <p>color</p>
         * @param stroke - <p>If it should stroke</p>
         * @param lineWidth - <p>line width</p>
         */
        static rectangle(x: number, y: number, width: number, height: number, color: string, stroke: boolean, lineWidth: number): Buffer;
        /**
         * <p>Fuse two images</p>
         * @param image1 - <p>First image</p>
         * @param image2 - <p>Second image</p>
         */
        static fuse(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
        /**
         * <p>Resize an image</p>
         * @param image - <p>Image source</p>
         * @param width - <p>width</p>
         * @param height - <p>height</p>
         */
        static resize(image: string | Buffer, width: number, height: number): Promise<Buffer>;
        /**
         * <p>Kiss each other ( ͡° ͜ʖ ͡°)</p>
         * @param image1 - <p>First image</p>
         * @param image2 - <p>Second image</p>
         */
        static kiss(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
        /**
         * <p>Spank someone ( ͡° ͜ʖ ͡°)</p>
         * @param image1 - <p>First image</p>
         * @param image2 - <p>Second image</p>
         */
        static spank(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
        /**
         * <p>Loads font</p>
         * @param fontArray - <p>Font array</p>
         */
        static registerFonts(fontArray: any[]): Promise<void>;
        /**
         * <p>Slap someone ( ͡° ͜ʖ ͡°)</p>
         * @param image1 - <p>First image</p>
         * @param image2 - <p>Second image</p>
         */
        static slap(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
        /**
         * <p>Oh this? This is beautiful!</p>
         * @param image - <p>Source image</p>
         */
        static beautiful(image: string | Buffer): Promise<Buffer>;
        /**
         * <p>facepalm</p>
         * @param image - <p>image</p>
         */
        static facepalm(image: string | Buffer): Promise<Buffer>;
        /**
         * <p>Rainbow ( ͡° ͜ʖ ͡°)</p>
         * @param image - <p>Image source</p>
         */
        static rainbow(image: string | Buffer): Promise<Buffer>;
        /**
         * <p>&quot;F&quot; in the chat</p>
         * @param image - <p>image source</p>
         */
        static rip(image: string | Buffer): Promise<Buffer>;
        /**
         * <p>Trash?</p>
         * @param image - <p>Image source</p>
         */
        static trash(image: string | Buffer): Promise<Buffer>;
        /**
         * <p>Worse than hitler</p>
         * @param image - <p>Source image</p>
         */
        static hitler(image: string | Buffer): Promise<Buffer>;
        /**
         * <p>Updates image color</p>
         * @param image - <p>Image source</p>
         * @param color - <p>HTML5 color</p>
         */
        static colorfy(image: string | Buffer, color: string): Promise<Buffer>;
        /**
         * <p>whoosh</p>
         * @param image - <p>Image source</p>
         */
        static jokeOverHead(image: string | Buffer): Promise<Buffer>;
        /**
         * <p>Distracted boyfriend</p>
         * @param image1 - <p>Face for the girl in red color</p>
         * @param image2 - <p>Face for the boy</p>
         * @param image3 - <p>Face for the other girl [optional]</p>
         */
        static distracted(image1: string | Buffer, image2: string | Buffer, image3: string | Buffer): Promise<Buffer>;
        /**
         * <p>No, it doesn't affect my baby.</p>
         * @param image - <p>Source image</p>
         */
        static affect(image: string | Buffer): Promise<Buffer>;
        /**
         * <p>Jail</p>
         * @param image - <p>Source image</p>
         * @param greyscale - <p>If it should greyscale image</p>
         */
        static jail(image: string | Buffer, greyscale: boolean): Promise<Buffer>;
        /**
         * <p>bed</p>
         * @param image1 - <p>First image</p>
         * @param image2 - <p>Second image</p>
         */
        static bed(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
        /**
         * <p>Delete</p>
         * @param image - <p>Source image</p>
         * @param dark - <p>If image should be in dark mode</p>
         */
        static delete(image: string | Buffer, dark: boolean): Promise<Buffer>;
        /**
         * <p>TicTacToe</p>
         * @param fill - <p>TicTacToe params</p>
         * @param [fill.a1] - <p>a1 value</p>
         * @param [fill.b1] - <p>b1 value</p>
         * @param [fill.c1] - <p>c1 value</p>
         * @param [fill.a2] - <p>a2 value</p>
         * @param [fill.b2] - <p>b2 value</p>
         * @param [fill.c2] - <p>c2 value</p>
         * @param [fill.a3] - <p>a3 value</p>
         * @param [fill.b3] - <p>b3 value</p>
         * @param [fill.c3] - <p>c3 value</p>
         * @param color - <p>Color params</p>
         * @param [color.bg] - <p>Background clolor</p>
         * @param [color.bar] - <p>TicTacToe bar color</p>
         * @param [color.x] - <p>Color of <strong>X</strong></p>
         * @param [color.o] - <p>Color of <strong>O</strong></p>
         */
        static tictactoe(fill: {
            a1?: "X" | "O";
            b1?: "X" | "O";
            c1?: "X" | "O";
            a2?: "X" | "O";
            b2?: "X" | "O";
            c2?: "X" | "O";
            a3?: "X" | "O";
            b3?: "X" | "O";
            c3?: "X" | "O";
        }, color: {
            bg?: string;
            bar?: string;
            x?: string;
            o?: string;
        }): Buffer;
        /**
         * <p>Opinion</p>
         * @param avatar - <p>Image</p>
         * @param msg - <p>Message</p>
         */
        static opinion(avatar: string | Buffer, msg: string): Promise<Buffer>;
        /**
         * <p>Creates Gradient</p>
         * @param colorFrom - <p>Starting color</p>
         * @param colorTo - <p>Ending color</p>
         * @param width - <p>Image width</p>
         * @param height - <p>Image height</p>
         */
        static gradient(colorFrom: string, colorTo: string, width: number, height: number): Buffer;
        /**
         * <p>Oh no! It's Stupid.</p>
         * @param message - <p>Message</p>
         */
        static ohno(message: string): Promise<Buffer>;
        /**
         * <p>Change my mind (taken from jgoralcz/image-microservice)</p>
         * @param text - <p>Text</p>
         */
        static changemymind(text: string): Promise<Buffer>;
        /**
         * <p>Clyde</p>
         * @param message - <p>Message</p>
         */
        static clyde(message: string): Promise<Buffer>;
        /**
         * <p>Fake Quote</p>
         * @param options - <p>Options</p>
         * @param [options.image] - <p>Image</p>
         * @param [options.message] - <p>Message</p>
         * @param [options.username] - <p>Username</p>
         * @param [options.color] - <p>Color</p>
         */
        static quote(options: {
            image?: Buffer | string;
            message?: string;
            username?: string;
            color?: string;
        }): Promise<Buffer>;
        /**
         * <p>PornHub Comment</p>
         * @param options - <p>Options</p>
         * @param [options.username] - <p>Username</p>
         * @param [options.message] - <p>Comment</p>
         * @param [options.image] - <p>Image</p>
         */
        static phub(options: {
            username?: string;
            message?: string;
            image?: string | Buffer;
        }): Promise<Buffer>;
        /**
         * <p>Wanted</p>
         * @param image - <p>Source image</p>
         */
        static wanted(image: string | Buffer): Promise<Buffer>;
        /**
         * <p>Wasted</p>
         * @param image - <p>Source image</p>
         */
        static wasted(image: string | Buffer): Promise<Buffer>;
        /**
         * <p>YouTube comment</p>
         * @param ops - <p>YouTube comment options</p>
         * @param [ops.username] - <p>Comment author username</p>
         * @param [ops.content] - <p>The comment</p>
         * @param [ops.avatar] - <p>Avatar source</p>
         * @param [ops.dark = false] - <p>Dark mode?</p>
         */
        static youtube(ops: {
            username?: string;
            content?: string;
            avatar?: string | Buffer;
            dark?: boolean;
        }): Promise<Buffer>;
        /**
         * <p>Oh Shit!</p>
         * @param image - <p>Source image</p>
         */
        static shit(image: string | Buffer): Promise<Buffer>;
        /**
         * <p>Writes the data as file</p>
         * @param data - <p>data to write</p>
         * @param name - <p>file name</p>
         */
        static write(data: Buffer, name: string): void;
        /**
         * <p>Returns default icon of a discord server</p>
         * @param name - <p>Guild name</p>
         * @param size - <p>Icon size. Valid: <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, <code>256</code>, <code>512</code>, <code>1024</code>, <code>2048</code> &amp; <code>4096</code></p>
         */
        static guildIcon(name: string, size?: number): Promise<Buffer>;
        /**
         * <p>Discord Reply Clone</p>
         * @example
         * const img = "https://cdn.discordapp.com/embed/avatars/0.png";
        const img2 = "https://cdn.discordapp.com/embed/avatars/4.png";
        canvacord.Canvas.reply({
            avatar1: img,
            avatar2: img2,
            user1: "Maximus",
            user2: "Snowflake",
            hex1: "#FF3300",
            hex2: "#7289da",
            mainText: "kok",
            replyText: "Pog"
        })
        .then(img => canvacord.write(img, "reply.png"));
        * @param options - <p>Options</p>
        * @param [options.avatar1] - <p>Avatar of the person who replied</p>
        * @param [options.avatar2] - <p>Avatar of the other person</p>
        * @param [options.user1] - <p>Username of the person who replied</p>
        * @param [options.user2] - <p>Username of the other person</p>
        * @param [options.hex1] - <p>Hex color of the person who replied</p>
        * @param [options.hex2] - <p>Hex color of the other person</p>
        * @param [options.mainText] - <p>The message</p>
        * @param [options.replyText] - <p>The reply message</p>
        */
        static reply(options: {
            avatar1?: string | Buffer;
            avatar2?: string | Buffer;
            user1?: string;
            user2?: string;
            hex1?: string;
            hex2?: string;
            mainText?: string;
            replyText?: string;
        }): Promise<Buffer>;
        /**
         * <p>Matrix data for <strong>Canvacord.convolute()</strong></p>
         */
        static CONVOLUTION_MATRIX: ConvolutionMatrix;
        /**
         * <p>Canvacord utils</p>
         */
        static Util: Util;
    }

    /**
     * <p>Canvacord convolution matrix</p>
     * @property EDGES - <p>Edges Matrix</p>
     * @property BLUR - <p>Blur Matrix</p>
     * @property SHARPEN - <p>Sharpen Matrix</p>
     * @property BURN - <p>Burn Matrix</p>
     */
    export type ConvolutionMatrix = {
        EDGES: number[];
        BLUR: number[];
        SHARPEN: number[];
        BURN: number[];
    };

    /**
     * <p>Creates spotify presence card</p>
     * @example
     * const card = new canvacord.Spotify()
     *         .setAuthor("Indila")
     *         .setAlbum("Mini World")
     *         .setStartTimestamp(Date.now() - 10000)
     *         .setEndTimestamp(Date.now() + 50000)
     *         .setImage("https://is5-ssl.mzstatic.com/image/thumb/Features111/v4/a4/89/a1/a489a1cb-4543-6861-a276-4470d41d6a90/mzl.zcdmhnlk.jpg/800x800bb.jpeg")
     *         .setTitle("S.O.S");
     *
     *     card.build()
     *         .then(data => {
     *             canvacord.write(data, "./images/spotify.png");
     *         });
     */
    export class Spotify {
        /**
         * <p>Song title</p>
         */
        title: string;
        /**
         * <p>Thumbnail</p>
         */
        image: string | Buffer | Canvas.Image;
        /**
         * <p>Song artist</p>
         */
        artist: string;
        /**
         * <p>Spotify album name</p>
         */
        album: string;
        /**
         * <p>Discord presence started timestamp</p>
         */
        start: number;
        /**
         * <p>Discord presence ending timestamp</p>
         */
        end: number;
        /**
         * <p>Background</p>
         */
        background: SpotifyDataBG;
        /**
         * <p>Progressbar details</p>
         */
        progressBar: SpotifyProgressBarData;
        /**
         * <p>Set progressbar details</p>
         * @param type - <p>Progressbar type</p>
         * @param color - <p>Color to set</p>
         */
        setProgressBar(type: "TRACK" | "BAR", color: string): Spotify;
        /**
         * <p>Set title</p>
         * @param title - <p>Title to set</p>
         */
        setTitle(title: string): Spotify;
        /**
         * <p>Set image</p>
         * @param source - <p>Image source</p>
         */
        setImage(source: string | Buffer | Canvas.Image): Spotify;
        /**
         * <p>Set artist name</p>
         * @param name - <p>Artist name</p>
         */
        setAuthor(name: string): Spotify;
        /**
         * <p>Set album name</p>
         * @param name - <p>Album name</p>
         */
        setAlbum(name: string): Spotify;
        /**
         * <p>Set start timestamp</p>
         * @param time - <p>Timestamp</p>
         */
        setStartTimestamp(time: Date | number): Spotify;
        /**
         * <p>Set end timestamp</p>
         * @param time - <p>Timestamp</p>
         */
        setEndTimestamp(time: Date | number): Spotify;
        /**
         * <p>Set background</p>
         * @param type - <p>Background type</p>
         * @param data - <p>Background data</p>
         */
        setBackground(type?: "COLOR" | "IMAGE", data?: string | Buffer | Canvas.Image): Spotify;
        /**
         * <p>This function converts raw data into spotify presence card.</p>
         */
        build(): Promise<Buffer>;
    }

    /**
     * @property type - <p>Background type</p>
     * @property data - <p>Background data</p>
     */
    export type SpotifyDataBG = {
        type: number;
        data: string | Buffer;
    };

    /**
     * @property bgColor - <p>Progressbar bg color</p>
     * @property color - <p>Progressbar bg color</p>
     */
    export type SpotifyProgressBarData = {
        bgColor: string;
        color: string;
    };

    /**
     * <p>Welcome image builder</p>
     * @example
     * const card = new canvacord.Welcomer()
     *             .setUsername("Snowflake")
     *             .setDiscriminator("0007")
     *             .setGuildName("Snowflake Studio");
     *
     *         card.build()
     *             .then(data => {
     *                 canvacord.write(data, "welcomer.png");
     *             })
     */
    export class Welcomer {
        constructor();
        /**
         * <p>Title created with Canvacord</p>
         */
        textTitle: string;
        /**
         * <p>Text message created with Canvacord</p>
         */
        textMessage: string;
        /**
         * <p>Title color created with canvacord</p>
         */
        colorTitle: string;
        /**
         * <p>Set color</p>
         * @param color - <p>HTML5 color code</p>
         */
        setColor(id: "title" | "title-border" | "avatar" | "username" | "username-box" | "hashtag" | "discriminator" | "discriminator-box" | "message" | "message-box" | "member-count" | "background" | "border", color: string): Welcomer;
        /**
         * <p>Set member count</p>
         * @param memberCount - <p>Guild member count</p>
         */
        setMemberCount(memberCount?: number | string): Welcomer;
        /**
         * <p>Builds welcome image</p>
         */
        build(): Promise<Buffer>;
    }

    /**
     * <p>Leaver image builder</p>
     * @example
     * const card = new canvacord.Leaver()
     *             .setUsername("Snowflake")
     *             .setDiscriminator("0007")
     *             .setGuildName("Snowflake Studio");
     *
     *         card.build()
     *             .then(data => {
     *                 canvacord.write(data, "leaver.png");
     *             })
     */
    export class Leaver {
        constructor();
        /**
         * <p>Title created with Canvacord</p>
         */
        textTitle: string;
        /**
         * <p>Text message created with Canvacord</p>
         */
        textMessage: string;
        /**
         * <p>Title color created with canvacord</p>
         */
        colorTitle: string;
        /**
         * <p>Set color</p>
         * @param color - <p>HTML5 color code</p>
         */
        setColor(id: "title" | "title-border" | "avatar" | "username" | "username-box" | "hashtag" | "discriminator" | "discriminator-box" | "message" | "message-box" | "member-count" | "background" | "border", color: string): Leaver;
        /**
         * <p>Ser member count</p>
         * @param memberCount - <p>Guild member count</p>
         */
        setMemberCount(memberCount?: number | string): Leaver;
        /**
         * <p>Builds welcome image</p>
         */
        build(): Promise<Buffer>;
    }

    /**
     * @property circle - <p>Circle plugin</p>
     * @property convolute - <p>Convolute plugin</p>
     * @property rectangle - <p>Rectangle plugin</p>
     * @property round - <p>Round plugin</p>
     * @property abbrev - <p>Abbrev plugin</p>
     * @property renderEmoji - <p>Emoji rendering plugin</p>
     */
    export type Plugins = {
        circle: (...params: any[]) => any;
        convolute: (...params: any[]) => any;
        rectangle: (...params: any[]) => any;
        round: (...params: any[]) => any;
        abbrev: (...params: any[]) => any;
        renderEmoji: (...params: any[]) => any;
    };

    /**
     * @property width - <p>Rank card width</p>
     * @property height - <p>Rank card height</p>
     * @property background - <p>Rank card background data</p>
     * @property [background.type = "color"] - <p>Background type</p>
     * @property [background.image = "#23272A"] - <p>Background image (or color)</p>
     * @property progressBar - <p>Progressbar data</p>
     * @property [progressBar.rounded = true] - <p>If the progressbar should be rounded</p>
     * @property [progressBar.x = 275.5] - <p>Progressbar X</p>
     * @property [progressBar.y = 183.75] - <p>Progressbar Y</p>
     * @property [progressBar.height = 37.5] - <p>Progressbar height</p>
     * @property [progressBar.width = 596.5] - <p>Progressbar width</p>
     * @property [progressBar.track] - <p>Progressbar track</p>
     * @property [progressBar.track.color = "#484b4E"] - <p>Progressbar track color</p>
     * @property [progressBar.bar] - <p>Progressbar bar data</p>
     * @property [progressBar.bar.type = "color"] - <p>Progressbar bar type</p>
     * @property [progressBar.bar.color = "#FFFFFF"] - <p>Progressbar bar color</p>
     * @property overlay - <p>Progressbar overlay</p>
     * @property [overlay.display = true] - <p>If it should display overlay</p>
     * @property [overlay.level = 0.5] - <p>Overlay opacity level</p>
     * @property [overlay.color = "#333640"] - <p>Overlay bg color</p>
     * @property avatar - <p>Rank card avatar data</p>
     * @property [avatar.source = null] - <p>Avatar source</p>
     * @property [avatar.x = 70] - <p>X</p>
     * @property [avatar.y = 50] - <p>Y</p>
     * @property [avatar.height = 180] - <p>height</p>
     * @property [avatar.width = 180] - <p>width</p>
     * @property status - <p>Rank card status</p>
     * @property [status.width = 5] - <p>Status width</p>
     * @property [status.type] - <p>Status type</p>
     * @property [status.color = "#43B581"] - <p>Status color</p>
     * @property [status.circle = false] - <p>Circualr status?</p>
     * @property rank - <p>Rank card rank data</p>
     * @property [rank.display = true] - <p>If it should display rank</p>
     * @property [rank.data = 1] - <p>The Rank</p>
     * @property [rank.textColor = "#FFFFFF"] - <p>Rank text color</p>
     * @property [rank.color = "#F3F3F3"] - <p>Rank color</p>
     * @property [rank.displayText = "RANK"] - <p>Rank display text</p>
     * @property level - <p>Rank card level data</p>
     * @property [level.display = true] - <p>If it should display level</p>
     * @property [level.data = 1] - <p>The level</p>
     * @property [level.textColor = "#FFFFFF"] - <p>level text color</p>
     * @property [level.color = "#F3F3F3"] - <p>level color</p>
     * @property [level.displayText = "LEVEL"] - <p>level display text</p>
     * @property currentXP - <p>Rank card current xp</p>
     * @property [currentXP.data = 0] - <p>Current xp</p>
     * @property [currentXP.color = "#FFFFFF"] - <p>Rank card current xp color</p>
     * @property requiredXP - <p>Rank card required xp</p>
     * @property [requiredXP.data = 0] - <p>required xp</p>
     * @property [requiredXP.color = "#FFFFFF"] - <p>Rank card required xp color</p>
     * @property discriminator - <p>Rank card discriminator</p>
     * @property [discriminator.discrim = null] - <p>The discriminator</p>
     * @property [discriminator.color = "rgba(255, 255, 255, 0.4)"] - <p>Rank card discriminator color</p>
     * @property username - <p>Username Data</p>
     * @property [username.name = null] - <p>Rank card username</p>
     * @property [username.color = "#FFFFFF"] - <p>Rank card username color</p>
     * @property [renderEmojis = false] - <p>If it should render emojis</p>
     */
    export type CanvacordRankData = {
        width: number;
        height: number;
        background: {
            type?: "image" | "color";
            image?: string | Buffer;
        };
        progressBar: {
            rounded?: boolean;
            x?: number;
            y?: number;
            height?: number;
            width?: number;
            track?: {
                color?: string;
            };
            bar?: {
                type?: "color" | "gradient";
                color?: string | string[];
            };
        };
        overlay: {
            display?: boolean;
            level?: number;
            color?: string;
        };
        avatar: {
            source?: string | Buffer;
            x?: number;
            y?: number;
            height?: number;
            width?: number;
        };
        status: {
            width?: number;
            type?: "online" | "dnd" | "idle" | "offline" | "streaming";
            color?: string;
            circle?: boolean;
        };
        rank: {
            display?: boolean;
            data?: number;
            textColor?: string;
            color?: string;
            displayText?: string;
        };
        level: {
            display?: boolean;
            data?: number;
            textColor?: string;
            color?: string;
            displayText?: string;
        };
        currentXP: {
            data?: number;
            color?: string;
        };
        requiredXP: {
            data?: number;
            color?: string;
        };
        discriminator: {
            discrim?: number | string;
            color?: string;
        };
        username: {
            name?: string;
            color?: string;
        };
        renderEmojis?: boolean;
    };

    /**
     * <p>Creates Rank card</p>
     * @example
     * const rank = new canvacord.Rank()
     *             .setAvatar(img)
     *             .setCurrentXP(203)
     *             .setRequiredXP(500)
     *             .setStatus("dnd")
     *             .setProgressBar(["#FF0000", "#0000FF"], "GRADIENT")
     *             .setUsername("Snowflake")
     *             .setDiscriminator("0007");
     *
     *         rank.build()
     *             .then(data => {
     *                 canvacord.write(data, "RankCard.png");
     *             })
     */
    export class Rank {
        constructor();
        /**
         * <p>Rank card data</p>
         */
        data: CanvacordRankData;
        /**
         * <p>Loads font</p>
         * @param fontArray - <p>Font array</p>
         */
        registerFonts(fontArray: any[]): Rank;
        /**
         * <p>If it should render username with emojis (if any)</p>
         * @param [apply = false] - <p>Set it to <code>true</code> to render emojis.</p>
         */
        renderEmojis(apply?: boolean): Rank;
        /**
         * <p>Set username</p>
         * @param name - <p>Username</p>
         * @param color - <p>Username color</p>
         */
        setUsername(name: string, color?: string): Rank;
        /**
         * <p>Set discriminator</p>
         * @param discriminator - <p>User discriminator</p>
         * @param color - <p>Discriminator color</p>
         */
        setDiscriminator(discriminator: string | number, color?: string): Rank;
        /**
         * <p>Set progressbar style</p>
         * @param color - <p>Progressbar Color</p>
         * @param [fillType = COLOR] - <p>Progressbar type</p>
         * @param [rounded = true] - <p>If progressbar should have rounded edges</p>
         */
        setProgressBar(color: string | string[], fillType?: "COLOR" | "GRADIENT", rounded?: boolean): Rank;
        /**
         * <p>Set progressbar track</p>
         * @param color - <p>Track color</p>
         */
        setProgressBarTrack(color: string): Rank;
        /**
         * <p>Set card overlay</p>
         * @param color - <p>Overlay color</p>
         * @param [level = 0.5] - <p>Opacity level</p>
         * @param [display = true] - <p>IF it should display overlay</p>
         */
        setOverlay(color: string, level?: number, display?: boolean): Rank;
        /**
         * <p>Set required xp</p>
         * @param data - <p>Required xp</p>
         * @param color - <p>Color</p>
         */
        setRequiredXP(data: number, color?: string): Rank;
        /**
         * <p>Set current xp</p>
         * @param data - <p>Current xp</p>
         * @param color - <p>Color</p>
         */
        setCurrentXP(data: number, color?: string): Rank;
        /**
         * <p>Set Rank</p>
         * @param data - <p>Current Rank</p>
         * @param text - <p>Display text</p>
         * @param [display = true] - <p>If it should display rank</p>
         */
        setRank(data: number, text?: string, display?: boolean): Rank;
        /**
         * <p>Set rank display color</p>
         * @param text - <p>text color</p>
         * @param number - <p>Number color</p>
         */
        setRankColor(text?: string, number?: string): Rank;
        /**
         * <p>Set level color</p>
         * @param text - <p>text color</p>
         * @param number - <p>number color</p>
         */
        setLevelColor(text?: string, number?: string): Rank;
        /**
         * <p>Set Level</p>
         * @param data - <p>Current Level</p>
         * @param text - <p>Display text</p>
         * @param [display = true] - <p>If it should display level</p>
         */
        setLevel(data: number, text?: string, display?: boolean): Rank;
        /**
         * <p>Set custom status color</p>
         * @param color - <p>Color to set</p>
         */
        setCustomStatusColor(color: string): Rank;
        /**
         * <p>Set status</p>
         * @param status - <p>User status</p>
         * @param circle - <p>If status icon should be circular.</p>
         * @param width - <p>Status width</p>
         */
        setStatus(status: "online" | "idle" | "dnd" | "offline" | "streaming", circle: boolean, width?: number | boolean): Rank;
        /**
         * <p>Set background image/color</p>
         * @param type - <p>Background type</p>
         * @param [data] - <p>Background color or image</p>
         */
        setBackground(type: "COLOR" | "IMAGE", data?: string | Buffer): Rank;
        /**
         * <p>User avatar</p>
         * @param data - <p>Avatar data</p>
         */
        setAvatar(data: string | Buffer): Rank;
        /**
         * <p>Builds rank card</p>
         * @param ops - <p>Fonts</p>
         * @param [ops.fontX = "MANROPE_BOLD"] - <p>Bold font family</p>
         * @param [ops.fontY = "MANROPE_REGULAR"] - <p>Regular font family</p>
         */
        build(ops?: {
            fontX?: string;
            fontY?: string;
        }): Promise<Buffer>;
    }

    /**
     * <p>Canvacord Util</p>
     */
    export class Util {
        constructor();
        /**
         * <p>Validates hex</p>
         * @param hex - <p>Hex code to validate</p>
         */
        static validateHex(hex: string): boolean;
        /**
         * <p>Converts regular timestamp to discord like time</p>
         * @param time - <p>Timestamp to convert</p>
         */
        static discordTime(time: Date | number): string;
        /**
         * <p>Formats time</p>
         * @param time - <p>Time to format</p>
         */
        static formatTime(time: number): string;
        /**
         * <p>Shorten text.</p>
         * @param text - <p>Text to shorten</p>
         * @param len - <p>Max Length</p>
         */
        static shorten(text: string, len: number): string;
        /**
         * <p>Converts numbers into units like <code>1K</code>, <code>1M</code>, <code>1B</code> etc.</p>
         */
        static toAbbrev(num: number | string): void;
        /**
         * <p>Renders text with emoji</p>
         * @param ctx - <p>CanvasRenderingContext2D</p>
         * @param msg - <p>Message</p>
         * @param x - <p>X</p>
         * @param y - <p>Y</p>
         */
        static renderEmoji(ctx: CanvasRenderingContext2D, msg: string, x: number, y: number): Promise<void>;
        /**
         * <p>Returns formatted hex code</p>
         * @param hex - <p>Hex code to format</p>
         * @param alt - <p>Alt color</p>
         */
        static formatHex(hex: string, alt?: string): string;
        /**
         * <p>Inverts hex color</p>
         * @param hex - <p>Hex color code to invert</p>
         */
        static invertColor(hex: string): string;
        /**
         * <p>Returns acronym</p>
         * @param name - <p>Name to parse acronym</p>
         */
        static getAcronym(name: string): string;
        /**
         * <p>Returns array of lines</p>
         * @param params - <p>Params</p>
         * @param text - <p>Text</p>
         * @param ctx - <p>CanvasRenderingContext2D</p>
         * @param maxWidth - <p>Max width</p>
         */
        static getLines(params: any, text: string, ctx: CanvasRenderingContext2D, maxWidth: number): string[];
    }
}
