{
    function Document(str){
	    this.initialStr=str;
	    this.dicList={};
		this.dicMap={};
		this.dicBlock={};
		this.componentSequence=[];
	};
	Document.prototype.query=function(componentKey){
	    var queryTarget=componentKey.startsWith('List')?this.dicList:
		                componentKey.startsWith('Map')?this.dicMap:
						componentKey.startsWith('Block')?this.dicBlock:
						null;
		return !queryTarget?null:queryTarget[componentKey];
	};
	Document.prototype.toStream=function(){
	    return this.initialStr;
	}
}
start
    = .+ {return new Document(text())} 
