import React from 'react';
import BlockItem from '../../components/blockitem/blockitem.jsx';
import blocks from './blocks.json';

export default class BlocksSection extends React.Component {
    render () {
        return (
            <div className="content-section learn-blocks" id="blocks-section">
                <a href="/pdfs/block-descriptions.pdf" className="download-guide-link">
                    <span className="download-icon">&#x2193;</span>Download guide as pdf</a>
                {/* Yellow Blocks */}
                <div className="block-category-header" id="yellow-block-category-header">
                    Triggering Blocks
                </div>
                <div
                    className="block-category-header-line"
                    id="yellow-block-category-header-line"></div>
                <div className="blocks-category-container">
                    {blocks.triggerBlocks.map((block, index) => {
                        return (<BlockItem key={index} {...block}/>);
                    })}
                </div>
                {/* Blue Blocks */}
                <div className="block-category-header" id="blue-block-category-header">
                    Motion Blocks
                </div>
                <div
                    className="block-category-header-line"
                    id="blue-block-category-header-line"></div>
                <div className="blocks-category-container">
                    {blocks.motionBlocks.map((block, index) => {
                        return (<BlockItem key={index} {...block}/>);
                    })}
                </div>
                {/* Purple Blocks */}
                <div className="block-category-header" id="purple-block-category-header">
                    Looks Blocks
                </div>
                <div
                    className="block-category-header-line"
                    id="purple-block-category-header-line"></div>
                <div className="blocks-category-container">
                    {blocks.looksBlocks.map((block, index) => {
                        return (<BlockItem key={index} {...block}/>);
                    })}
                </div>
                <div className="block-category-header" id="green-block-category-header">
                    Sound Blocks
                </div>
                <div
                    className="block-category-header-line"
                    id="green-block-category-header-line"></div>
                <div className="blocks-category-container">
                    {blocks.soundBlocks.map((block, index) => {
                        return (<BlockItem key={index} {...block}/>);
                    })}
                </div>
                <div className="block-category-header" id="orange-block-category-header">
                    Control Blocks
                </div>
                <div
                    className="block-category-header-line"
                    id="orange-block-category-header-line"></div>
                <div className="blocks-category-container">
                    {blocks.controlBlocks.map((block, index) => {
                        return (<BlockItem key={index} {...block}/>);
                    })}
                </div>
                <div className="block-category-header" id="red-block-category-header">
                    End Blocks
                </div>
                <div className="block-category-header-line" id="red-block-category-header-line"></div>
                <div className="blocks-category-container">
                    {blocks.endBlocks.map((block, index) => {
                        return (<BlockItem key={index} {...block}/>);
                    })}
                </div>
            </div>
        );
    }
}
