export default function Attribute$updateContentEditableValue () {
	var node, value;

	node = this.node;
	value = this.value;

	if ( value === undefined ) {
		value = '';
	}

	if ( !this.locked ) {
		node.innerHTML = value;
	}
}
