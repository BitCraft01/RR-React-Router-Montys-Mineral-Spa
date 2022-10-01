

export default function Packages(props) {
    let packs = props.packages.map((pack) => <li>{pack}</li>)
    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                </div>
                {packs}
            </div>
        </div>
    )
}