module.exports = ClozeCard;

function ClozeCard(text, cloze){
    this.text = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, "...");
}


