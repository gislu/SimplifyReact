
/** @jsx h */
function h(type, props, ...children){
    return{type, props, children}
}


//since Jsx is just a syntax suger
//we need to implement a function to transfer virtual dom into realDom
//with Pragma (@jsx h)  every jsx node will auto transformed into an object by function h


/* so all the list will be like in complier : 
    const a = (
      h(‘ul’, { className: ‘list’ },
        h(‘li’, {},  'apple'),
        h(‘li’, {}, 'beer'),
    );
);*/

const list={
	<ul class="list">
		<li>apple</li>
		<li>beer</li>
	</ul>
}

//in compiler, it will automaticly become console.log(h(list))
console.log(list)