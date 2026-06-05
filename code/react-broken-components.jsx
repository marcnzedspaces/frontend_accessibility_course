export function BadTextField({ label, error }) {return (<div><p>{label}</p><input type="text" />{error && <p>{error}</p>}</div>)}
export function BadDisclosure({ title, children }) {return (<div><div onClick={() => console.log('toggle')}>{title}</div><div>{children}</div></div>)}
export function BadDialog({ open, children }) {if (!open) return null; return (<div className="modal"><div>Modal</div>{children}<span onClick={() => console.log('close')}>Close</span></div>)}
