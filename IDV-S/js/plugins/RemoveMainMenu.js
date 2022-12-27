Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
    var lineHeight = this.lineHeight();
    var x2 = x + 180;
    var width2 = Math.min(200, width - 180 - this.textPadding());
    this.drawActorName(actor, x, y);
    this.drawActorIcons(actor, x, y + lineHeight * 2);
    this.drawActorClass(actor, x2, y);
};
 
Window_Status.prototype.drawBasicInfo = function(x, y) {
    var lineHeight = this.lineHeight();
    this.drawActorIcons(this._actor, x, y + lineHeight * 1);
};