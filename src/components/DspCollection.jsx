import { DialogModal } from "./DialogModal";

const DspCollection = (props) => {
    if (!props.dspSet) {
        return null;
    }
    const dspComponentSet = props.dspSet.map((dsp) => (<DialogModal key={dsp.key} name={dsp.name} details={dsp.details} />))
    return (
        <>
            { dspComponentSet }
        </>
    )
}

export default DspCollection