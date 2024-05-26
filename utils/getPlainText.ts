type RichTextContent = {
    children: Array<{
        type: string;
        children?: Array<any>; // Can be text, nested structures, etc.
    }>;
};

export function getPlainText(content: RichTextContent): string {

    let plainText = "";
    function traverse(node: any) {
        if (node.text) {
            plainText += node.text;
        } else if (Array.isArray(node)) {
            node.forEach(traverse);
        } else if (node.children) {
            traverse(node.children); // Recursively traverse children
        }
    }

    traverse(content.children);
    return plainText.trim(); // Remove leading/trailing whitespace
}
