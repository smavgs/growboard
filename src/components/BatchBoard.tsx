import { useMemo, useState } from 'preact/hooks';
import { batchesByStage } from '../data/demo';

type Batch = {id:string;name:string;place:string;day:string;volume:string;status:string};
const stages=Object.keys(batchesByStage) as Array<keyof typeof batchesByStage>;
const allBatches=Object.values(batchesByStage).flat() as Batch[];
const statusClass=(s:string)=>s==='Healthy'?'green':s==='Attention'?'red':s==='Watch'?'orange':'blue';

export default function BatchBoard(){
  const [stage,setStage]=useState('All');
  const [selected,setSelected]=useState<Batch>(allBatches.find(x=>x.id==='BCH-FLW-2024-073')||allBatches[0]);
  const visible=useMemo(()=>stage==='All'?stages:stages.filter(x=>x===stage),[stage]);
  return <>
    <div class="grid g5">
      {[
        ['Active Batches','32','of 38'],['On Schedule','21','65%'],['At Risk','7','22%'],['Forecast Output','1,248 kg','facility'],['Ready for Harvest','5','batches']
      ].map(([label,value,sub],i)=><div class="kpi"><div class="kpi-head"><span class="kpi-label">{label}</span><span class="kpi-icon">{i===2?'△':'◫'}</span></div><div class="kpi-value">{value}</div><div class="kpi-sub">{sub}</div><svg class="spark" viewBox="0 0 100 28" preserveAspectRatio="none"><path d="M1 20 C10 8,20 25,30 15 S48 9,59 19 S78 10,99 14" fill="none" stroke={i===2?'#f59e0b':'#6f4cff'} stroke-width="2.3"/></svg></div>)}
    </div>
    <div class="panel"><div class="panel-head"><div><h2 class="panel-title">Batch Lifecycle Board</h2><div class="row-sub">Propagation → Vegetative → Flower → Harvest → Dry → Cure → QC → Release</div></div><select class="pill" value={stage} onChange={e=>setStage((e.currentTarget as HTMLSelectElement).value)}><option>All</option>{stages.map(s=><option>{s}</option>)}</select></div><div class="kanban" style="margin-top:14px">{visible.map(s=><div class="kanban-col"><div class="kanban-head"><span>{s}</span><span class="badge">{batchesByStage[s].length}</span></div>{batchesByStage[s].map(card=><button class={`batch-card ${selected.id===card.id?'selected':''}`} onClick={()=>setSelected(card as Batch)} style="text-align:left;width:100%"><div class="row-title">{card.id}</div><div class="row-sub">{card.name}</div><div class="row-sub">{card.place}</div><div class="context" style="margin-top:8px"><span class={`status ${statusClass(card.status)}`}>{card.status}</span><span class="row-sub">{card.day}</span></div><div class="row-sub" style="margin-top:5px">{card.volume}</div></button>)}</div>)}</div></div>
    <div class="grid g4">
      <div class="panel"><div class="eyebrow">Selected Batch</div><h2 class="panel-title" style="margin-top:5px">{selected.id}</h2><div class="row-sub">{selected.name} · {selected.place}</div><div class="context" style="margin-top:10px"><span class={`status ${statusClass(selected.status)}`}>{selected.status}</span><span class="status purple">Flower</span></div><div class="metric-grid" style="margin-top:12px"><div class="metric"><div class="metric-label">Day in stage</div><div class="metric-value">28</div><div class="row-sub">of 63</div></div><div class="metric"><div class="metric-label">Plants</div><div class="metric-value">1,280</div></div><div class="metric"><div class="metric-label">Forecast</div><div class="metric-value">43.7 kg</div></div><div class="metric"><div class="metric-label">Progress</div><div class="metric-value">44%</div></div></div></div>
      <div class="panel"><h2 class="panel-title">Recent Events</h2><div class="timeline" style="margin-top:12px">{[['Nutrient recipe updated','Today 8:42 AM'],['Lab result in range','Today 6:15 AM'],['Irrigation completed','Yesterday 7:30 PM'],['Light intensity adjusted','Yesterday 3:12 PM']].map(([x,t])=><div class="time-row"><div class="dot"></div><div><div class="row-title">{x}</div><div class="row-sub">Linked to {selected.id}</div></div><div class="row-sub">{t}</div></div>)}</div></div>
      <div class="panel"><h2 class="panel-title">Quality State</h2><div class="metric" style="margin-top:12px"><div class="metric-label">Quality score</div><div class="metric-value">86</div><div class="positive small">Good</div></div><div class="list" style="margin-top:10px">{[['Moisture','62%'],['Terpenes','2.18%'],['THC','24.3%'],['Visual Quality','8.8/10']].map(([a,b])=><div class="list-row"><span class="row-title">{a}</span><span>{b}</span></div>)}</div></div>
      <div class="panel"><h2 class="panel-title">Forecast Summary</h2><svg class="chart-short" viewBox="0 0 320 140" preserveAspectRatio="none"><path d="M15 112 C55 90,90 70,120 68 S180 70,220 66 S270 50,310 34 L310 125 L15 125 Z" fill="rgba(111,76,255,.1)"/><path d="M15 112 C55 90,90 70,120 68 S180 70,220 66 S270 50,310 34" fill="none" stroke="#6f4cff" stroke-width="3"/></svg><div class="metric-grid"><div class="metric"><div class="metric-label">Forecast Yield</div><div class="metric-value">43.7 kg</div></div><div class="metric"><div class="metric-label">Est. Harvest</div><div class="row-title">May 28, 2024</div></div><div class="metric"><div class="metric-label">Confidence</div><div class="metric-value">82%</div></div></div></div>
    </div>
  </>
}
