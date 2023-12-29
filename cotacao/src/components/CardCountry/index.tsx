import React from 'react';
import './style.css'

interface Props {
    nome: string
    bandeira: string
    moeda: string
}

const CardCountry = ({nome, bandeira, moeda}: Props) => {
    return (
		<div
			className={`card border-0`}
			style={{ width: "15rem" }}
		>
			<div className="image-container">
				<img
					src={bandeira}
					className="card-img-top img-fluid rounded"
					alt="..."
					style={{ height: "200px" }}
				/>
			</div>
			<div className="card-body">
				<h5 className="card-title">{nome} </h5>
				<div className="d-flex justify-content-between">
					<p className="card-text text-muted">
						{moeda}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CardCountry;