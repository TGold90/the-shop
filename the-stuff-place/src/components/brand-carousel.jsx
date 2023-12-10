import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
    return (
        <Carousel className="rounded-xl">
            <div className="brand-card">Brand Card!</div>
            <div className="brand-card">Brand Card!</div>
            <div className="brand-card">Brand Card!</div>
            <div className="brand-card">Brand Card!</div>
            <div className="brand-card">Brand Card!</div>
            <div className="brand-card">Brand Card!</div>
        </Carousel>
    );
}