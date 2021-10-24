export class HtmlHelper {
    static get tags() {
        return {
            a: 'a',
            any: '*',
            abbr: 'abbr',
            acronym: 'acronym',
            address: 'address',
            applet: 'applet',
            area: 'area',
            article: 'article',
            aside: 'aside',
            audio: 'audio',
            b: 'b',
            base: 'base',
            baseFont: 'basefont',
            bdi: 'bdi',
            bdo: 'bdo',
            big: 'big',
            blockQuote: 'blockquote',
            body: 'body',
            br: 'br',
            button: 'button',
            canvas: 'canvas',
            caption: 'caption',
            center: 'center',
            cite: 'cite',
            code: 'code',
            col: 'col',
            colGroup: 'colgroup',
            command: 'command',
            dataList: 'datalist',
            dd: 'dd',
            del: 'del',
            details: 'details',
            dfn: 'dfn',
            dir: 'dir',
            div: 'div',
            dl: 'dl',
            dt: 'dt',
            em: 'em',
            embed: 'embed',
            fieldSet: 'fieldset',
            figCaption: 'figcaption',
            figure: 'figure',
            font: 'font',
            footer: 'footer',
            form: 'form',
            frame: 'frame',
            frameSet: 'frameset',
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            h4: 'h4',
            h5: 'h5',
            h6: 'h6',
            head: 'head',
            header: 'header',
            hGroup: 'hgroup',
            hr: 'hr',
            html: 'html',
            i: 'i',
            iFrame: 'iframe',
            img: 'img',
            input: 'input',
            ins: 'ins',
            kbd: 'kbd',
            keyGen: 'keygen',
            label: 'label',
            legend: 'legend',
            li: 'li',
            link: 'link',
            map: 'map',
            mark: 'mark',
            menu: 'menu',
            meta: 'meta',
            meter: 'meter',
            nav: 'nav',
            nobr: 'nobr',
            noFrames: 'noframes',
            noScript: 'noscript',
            object: 'object',
            ol: 'ol',
            optGroup: 'optgroup',
            option: 'option',
            output: 'output',
            p: 'p',
            param: 'param',
            pre: 'pre',
            progress: 'progress',
            q: 'q',
            rp: 'rp',
            rt: 'rt',
            ruby: 'ruby',
            s: 's',
            sAmp: 'samp',
            script: 'script',
            section: 'section',
            select: 'select',
            small: 'small',
            source: 'source',
            span: 'span',
            strike: 'strike',
            strong: 'strong',
            style: 'style',
            sub: 'sub',
            summary: 'summary',
            sup: 'sup',
            table: 'table',
            tBody: 'tbody',
            td: 'td',
            textArea: 'textarea',
            tFoot: 'tfoot',
            th: 'th',
            tHead: 'thead',
            time: 'time',
            title: 'title',
            tr: 'tr',
            track: 'track',
            tt: 'tt',
            u: 'u',
            ul: 'ul',
            var: 'var',
            video: 'video',
            wbr: 'wbr',
        };
    }

    static get additionalAttributes() {
        return{
            ngRepeat: 'ng-repeat',
            ariaExpanded: 'aria-expanded',
            nghref : 'ng-href',
            uibTooltip: 'uib-tooltip',
            itemText: 'item-text',
            dataSelected: 'data-selected',
            dataRef: 'data-ref',
            tip : 'tip',
            text : 'text',
            contextmenuItemText: 'contextmenu-item-text',
            headerCaptionOne: 'header_caption_1',
            headerCaptionTwo: 'header_caption_2',
            headerButton: 'u8-header-button',
            gridTable: 'grid-table',
            selected: 'selected',
            treeContentFormPanel: 'tree_content_form_panel_Panel',
            imgCheckboxChecked: 'img-checkbox-checked-xs',
            dateInput: 'dateinput-label',
            overviewPanel: 'OverviewPanel',
            fontWeight: 'font-weight',
            backgroundColor: 'background-color',
            backgroundImage: 'background-image',
            borderLeftColor: 'border-left-color',
            ariaHidden: 'aria-hidden',
            cursor: 'cursor',
            contenteditable: 'contenteditable',
        };
    }

    public static get xpathExpressions() {
        return {
            following: 'following',
            ancestor: 'ancestor',
            descendant: 'descendant',
            followingSibling: 'following-sibling',
            preceding: 'preceding',
            precedingSibling: 'preceding-sibling',
            parent: 'parent',
        };
    }

    public static get attributeValues() {
        return {
            active: 'active',
            selected: 'selected',
        };
    }

    static readonly attributes = Object.freeze({
        accept: 'accept',
        acceptCharset: 'accept-charset',
        accessKey: 'accesskey',
        action: 'action',
        align: 'align',
        alt: 'alt',
        async: 'async',
        autoComplete: 'autocomplete',
        autoFocus: 'autofocus',
        autoPlay: 'autoplay',
        bgColor: 'bgcolor',
        border: 'border',
        buffered: 'buffered',
        challenge: 'challenge',
        charset: 'charset',
        checked: 'checked',
        cite: 'cite',
        class: 'class',
        code: 'code',
        codebase: 'codebase',
        color: 'color',
        cols: 'cols',
        colspan: 'colspan',
        content: 'content',
        contentEditable: 'contenteditable',
        contextMenu: 'contextmenu',
        controls: 'controls',
        coords: 'coords',
        crossOrigin: 'crossorigin',
        data: 'data',
        datetime: 'datetime',
        defaultt: 'default',
        defer: 'defer',
        dir: 'dir',
        dirName: 'dirname',
        disabled: 'disabled',
        download: 'download',
        draggable: 'draggable',
        dropZone: 'dropzone',
        enctype: 'enctype',
        for: 'for',
        form: 'form',
        formControlName: 'formcontrolname',
        formAction: 'formaction',
        headers: 'headers',
        height: 'height',
        hidden: 'hidden',
        high: 'high',
        href: 'href',
        hrefLang: 'hreflang',
        httpEquiv: 'http-equiv',
        icon: 'icon',
        id: 'id',
        integrity: 'integrity',
        isMap: 'ismap',
        itemProp: 'itemprop',
        keyType: 'keytype',
        kind: 'kind',
        label: 'label',
        lang: 'lang',
        language: 'language',
        list: 'list',
        loop: 'loop',
        low: 'low',
        manifest: 'manifest',
        max: 'max',
        maxLength: 'maxlength',
        minLength: 'minlength',
        media: 'media',
        method: 'method',
        min: 'min',
        multiple: 'multiple',
        muted: 'muted',
        name: 'name',
        novalidate: 'novalidate',
        open: 'open',
        optimum: 'optimum',
        pattern: 'pattern',
        ping: 'ping',
        placeholder: 'placeholder',
        poster: 'poster',
        preload: 'preload',
        radioGroup: 'radiogroup',
        readonly: 'readonly',
        rel: 'rel',
        required: 'required',
        reversed: 'reversed',
        rows: 'rows',
        rowSpan: 'rowspan',
        sandbox: 'sandbox',
        scope: 'scope',
        scoped: 'scoped',
        seamless: 'seamless',
        selected: 'selected',
        shape: 'shape',
        size: 'size',
        sizes: 'sizes',
        slot: 'slot',
        span: 'span',
        spellCheck: 'spellcheck',
        src: 'src',
        srcDoc: 'srcdoc',
        srcLang: 'srclang',
        srcset: 'srcset',
        start: 'start',
        step: 'step',
        style: 'style',
        summary: 'summary',
        tabIndex: 'tabindex',
        target: 'target',
        title: 'title',
        type: 'type',
        useMap: 'usemap',
        value: 'value',
        width: 'width',
        wrap: 'wrap',
    });
}
