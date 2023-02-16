import FiltRes from './FiltCon';

const ContentBoxes = ({ selectedId }) => {
    return (
        <div className="content-boxes-container">
            <div className={`content-box ${selectedId === 0 ? 'active' : ''}`} id="box-content-0">
                <FiltRes category="html"/>
            </div>
            <div className={`content-box ${selectedId === 1 ? 'active' : ''}`} id="box-content-1">
                <FiltRes category="css"/>
            </div>
            <div className={`content-box ${selectedId === 2 ? 'active' : ''}`} id="box-content-2">
                <FiltRes category="javascript"/>
            </div>
            <div className={`content-box ${selectedId === 3 ? 'active' : ''}`} id="box-content-3">
                <FiltRes category="react"/>
            </div>
            <div className={`content-box ${selectedId === 4 ? 'active' : ''}`} id="box-content-4">
                <FiltRes category="headless-cms"/>
            </div>
        </div>
    );
};

export default ContentBoxes;
