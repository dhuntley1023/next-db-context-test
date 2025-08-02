
function wait(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}


export default async function DelayedDisplay({seconds, children}) {
  await wait(seconds);
  return (<div>{children}</div>);
}