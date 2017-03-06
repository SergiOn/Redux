<h1>Redux screencast</h1>

<a target="_blank" href="https://www.youtube.com/watch?v=-m3evZuzXC8&index=1&list=PLqHlAwsJRxANFIgAf7BO8hNYdvipLERxQ">Link to screencast</a>

<h3>#1 Reducer</h3>
<h3>#2 Actions</h3>
<h3>#3 Store</h3>
<h3>#4 Subscription</h3>
<h3>#5 State</h3>
<p>Object.assign example:</p>
<pre>
function update(state, value) {
    return Object.assign({}, state, {
        count: state.count + value;
    });
}
</pre>