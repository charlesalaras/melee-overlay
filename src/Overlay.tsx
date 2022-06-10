import type { Component } from 'solid-js';

interface OverlayProps {
    display: number;
}

const Overlay = (props: OverlayProps) => {
    return(
        <div class="overlay">
            Overlay goes here!
        </div>
    );
};

export default Overlay;
