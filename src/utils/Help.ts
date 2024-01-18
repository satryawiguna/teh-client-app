// Global Functions
declare global {
    interface String {
        addPrefix(this: string, prefix: string | undefined): string;

        addSuffix(this: string, suffix: string | undefined): string;
    }
}

String.prototype.addPrefix = function (prefix: string | undefined): string {
    return `${prefix}/${this}`;
}

String.prototype.addSuffix = function (suffix: string | undefined): string {
    return `${this}/${suffix}/`;
}

// Common Functions
export const scrollableBody = () => {
    const bodyElement = document.body;

    bodyElement.removeAttribute("style");
};

export const splitCamelCase = (input: string | string[]): string | string[] => {
    if (Array.isArray(input)) {
        return input.map((item) =>
            item
                .replace(/([a-z])([A-Z])/g, "$1 $2")
                .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
                .replace(/^./, (match) => match.toUpperCase())
        )
    } else {
        return input
            .replace(/([a-z])([A-Z])/g, "$1 $2")
            .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
            .replace(/^./, (match) => match.toUpperCase())
    }
}

export const extractDataBase64String = (base64String: string) => {
    const match = base64String.match(/^data:(.*?);base64/)
    const mimeType = match ? match[1] : 'image/jpg'

    const regex = /^data:image\/([a-zA-Z]+)base64,/
    const result = regex.exec(base64String)

    let extension = null

    if (result && result[1]) {
        const mimeType = result[1]

        switch (mimeType) {
            case 'png':
                extension = 'png'
                break
            case 'jpeg':
            case 'jpg':
                extension = 'jpg'
                break
            case 'gif':
                extension = 'gif'
                break
            default:
                extension = null
                break
        }
    }

    return {
        mimeType,
        extension
    }
}
