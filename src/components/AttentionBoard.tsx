import { useMemo, useState } from 'preact/hooks';
import { attentionItems } from '../data/demo';

const statusClass = (s:string) => s === 'Critical' || s === 'High' ? 'red' : s === 'Medium' || s === 'Acknowledged' ? 'orange' : s === 'Resolved' ? 'green' : 'blue';

export default function AttentionBoard(){
  const [filter,setFilter]=useState('All');
  const [selected,setSelected]=useState(attentionItems[0]);
  const [message,setMessage]=useState('');
  const visible=useMemo(()=>filter==='All'?attentionItems:attentionItems.filter(x=>x.status===filter),[filter]);
  const start=(text:string)=>{setMessage(`${text} started in demo mode`); setTimeout(()=>setMessage(''),1800)};
  return <>
    <div class="grid g6">
      {[
        ['Critical','4','of 4','△','danger'],['Review','7','of 18','◉','warning'],['Process','6','of 14','⇉','positive'],['Equipment','5','of 12','⚙','positive'],['Quality','3','of 8','◈','positive'],['Data','8','of 23','☰','warning']
      ].map(([label,value,sub,icon,tone])=><div class="kpi"><div class="kpi-head"><span class="kpi-label">{label}</span><span class="kpi-icon">{icon}</span></div><div class="kpi-value">{value}</div><div class="kpi-sub">{sub}</div><svg class="spark" viewBox="0 0 100 28" preserveAspectRatio="none"><path d="M1 20 C10 8,20 25,30 15 S48 9,59 19 S78 10,99 14" fill="none" stroke={tone==='danger'?'#ef4444':tone==='warning'?'#f59e0b':'#6f4cff'} stroke-width="2.3"/></svg></div>)}
    </div>
    <div class="panel">
      <div class="panel-head"><div><h2 class="panel-title">Operational Attention Queue</h2><div class="row-sub">Everything that may need action, review or follow-up.</div></div><div class="context">{['All','New','Acknowledged','Investigating','Resolved'].map(f=><button class={`tab ${filter===f?'active':''}`} onClick={()=>setFilter(f)}>{f}</button>)}</div></div>
      <div class="split" style="margin-top:14px">
        <div class="table-wrap"><table class="table"><thead><tr><th>Item</th><th>Area</th><th>Type</th><th>Severity</th><th>Status</th><th>Owner</th><th>Age</th></tr></thead><tbody>{visible.map(item=><tr class={selected.id===item.id?'selected':''} onClick={()=>setSelected(item)}><td><div class="row-title">{item.item}</div><div class="row-sub">{item.detail}</div></td><td>{item.area}</td><td>{item.type}</td><td><span class={`status ${statusClass(item.severity)}`}>{item.severity}</span></td><td><span class={`status ${statusClass(item.status)}`}>{item.status}</span></td><td>{item.owner}</td><td>{item.age}</td></tr>)}</tbody></table></div>
        <div>
          <div class="panel" style="box-shadow:none;background:rgba(255,255,255,.65)"><div class="eyebrow">Selected attention</div><h3 style="font-size:19px;margin:5px 0 8px">{selected.item}</h3><div class="row-sub">{selected.id} · {selected.area} · {selected.type}</div><div class="context" style="margin:11px 0"><span class={`status ${statusClass(selected.severity)}`}>{selected.severity}</span><span class={`status ${statusClass(selected.status)}`}>{selected.status}</span></div><div class="metric-grid"><div class="metric"><div class="metric-label">Peak value</div><div class="metric-value">79.1°F</div></div><div class="metric"><div class="metric-label">Duration</div><div class="metric-value">24m</div></div><div class="metric"><div class="metric-label">Current</div><div class="metric-value">77.2°F</div></div></div><div class="notice" style="margin-top:12px">Temperature in Flower 02 exceeded the demonstration upper threshold of 78.0°F.</div><h4 style="margin:15px 0 8px">Suggested next actions</h4><div class="workflow"><button class="workflow-step" onClick={()=>start('HVAC setpoint review')}><span class="flow-num">1</span><span>Verify HVAC supply temperature setpoint</span></button><button class="workflow-step" onClick={()=>start('AHU-2 inspection')}><span class="flow-num">2</span><span>Inspect AHU-2 cooling coil and sensors</span></button><button class="workflow-step" onClick={()=>start('Door-cycle review')}><span class="flow-num">3</span><span>Review door openings and recent cycle events</span></button></div>{message&&<div class="notice" style="margin-top:10px">{message}</div>}
            <h4 style="margin:16px 0 8px">Related Evidence</h4>
            <div class="evidence-grid">
              <button class="evidence-card" onClick={()=>start('Temperature trend review')}><div class="evidence-copy"><div class="row-title">Temperature Trend</div><div class="row-sub">May 13 – May 14</div></div><svg class="evidence-trend" viewBox="0 0 180 68" preserveAspectRatio="none"><path d="M4 54 C18 48,28 52,40 40 S62 30,76 36 S98 52,112 42 S136 24,150 30 S166 20,176 16" fill="none" stroke="#6f4cff" stroke-width="2.7" stroke-linecap="round"/><path d="M4 60 H176" stroke="#e7eaf2" stroke-width="1"/></svg></button>
              <button class="evidence-card" onClick={()=>start('Room snapshot review')}><div class="evidence-copy"><div class="row-title">Room Snapshot</div><div class="row-sub">May 14, 8:42 AM</div></div><div class="evidence-snapshot" role="img" aria-label="Flower room snapshot"></div></button>
              <button class="evidence-card" onClick={()=>start('HVAC event review')}><div class="evidence-copy"><div class="row-title">HVAC Events</div><div class="row-sub">May 13 – May 14</div></div><div class="evidence-events">{[28,54,38,66,24,48,72,34,59,30,64,44,76,32,51,68].map((h,i)=><span style={`height:${h}%`} title={`Event ${i+1}`}></span>)}</div></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
