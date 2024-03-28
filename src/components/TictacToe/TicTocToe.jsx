import { useRef, useState } from "react";
import circle from "../Assets/circle2.png";
import mark from "../Assets/mark-x.png";
import "./tictoe.css";

let data = ["", "", "", "", "", "", "", "", ""];

function TicTocToe() {
	const [count, setCount] = useState(0);
	const [lock, setLock] = useState(false);
	const [scoresx, setScoresx] = useState(0);
	const [scoreso, setScoreso] = useState(0);

	const titleRef = useRef(null);
	const box1 = useRef(null);
	const box2 = useRef(null);
	const box3 = useRef(null);
	const box4 = useRef(null);
	const box5 = useRef(null);
	const box6 = useRef(null);
	const box7 = useRef(null);
	const box8 = useRef(null);
	const box9 = useRef(null);

	let boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

	const Toggle = (e, num) => {
		if (lock) {
			return 0;
		}
		if (count % 2 == 0) {
			e.target.innerHTML = `<img src='${mark}'>`;
			data[num] = "x";

			setCount(count + 1);
		} else {
			e.target.innerHTML = `<img src='${circle}'>`;
			data[num] = "0";
			setCount(count + 1);
		}
		checkWin();
	};

	const checkWin = () => {
		if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
			won(data[2]);
		} else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
			won(data[5]);
		} else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
			won(data[8]);
		} else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
			won(data[6]);
		} else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
			won(data[7]);
		} else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
			won(data[8]);
		} else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
			won(data[8]);
		} else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
			won(data[6]);
		}
	};
	const won = (winner) => {
		setLock(true);
		if (winner === "x") {
			titleRef.current.innerHTML = `Congratulations <img src='${mark}'/>`;
			setScoresx(scoresx + 1);
		} 
		
		else if( data[0] !== "" && data[1] !== "" && data[2] !== ""&& data[3] !== ""&& data[4] !== ""&& data[5] !== ""&& data[6] !== ""&& data[7] !== ""&& data[8] !== ""){
					titleRef.current.innerHTML = `DRAW!!!`;
			}
		else {
			titleRef.current.innerHTML = `Congratulations <img src='${circle}'/>`;
			{
				setScoreso(scoreso + 1);
			}
		}
	};
	const reset = (e) => {
		setLock(false);
		data = ["", "", "", "", "", "", "", "", ""];
		titleRef.current.innerHTML = `
				Tic Tac Toe Game In <span> React</span>`;
		boxArray.map((e) => {
			e.current.innerHTML = "";
		});

		// window.location.reload();
	};

	return (
		<div className='container'>
			<h1 className='title' ref={titleRef}>
				Tic Tac Toe Game In <span> React</span>
			</h1>
			<h2>Scores </h2>
			<div className='player'>
				<h2>
					Player <span>X</span>: {scoresx}
				</h2>
				<h2>
					Player <span>O</span> : {scoreso}
				</h2>
			</div>
			<div className='board'>
				<div className='row1'>
					<div
						className='boxes '
						ref={box1}
						onClick={(e) => {
							Toggle(e, 0);
						}}></div>
					<div
						className='boxes'
						ref={box2}
						onClick={(e) => {
							Toggle(e, 1);
						}}></div>
					<div
						className='boxes'
						ref={box3}
						onClick={(e) => {
							Toggle(e, 2);
						}}></div>
				</div>
				<div className='row2'>
					<div
						className='boxes'
						ref={box4}
						onClick={(e) => {
							Toggle(e, 3);
						}}></div>
					<div
						className='boxes'
						ref={box5}
						onClick={(e) => {
							Toggle(e, 4);
						}}></div>
					<div
						className='boxes'
						ref={box6}
						onClick={(e) => {
							Toggle(e, 5);
						}}></div>
				</div>
				<div className='row3'>
					<div
						className='boxes'
						ref={box7}
						onClick={(e) => {
							Toggle(e, 6);
						}}></div>
					<div
						className='boxes'
						ref={box8}
						onClick={(e) => {
							Toggle(e, 7);
						}}></div>
					<div
						className='boxes'
						ref={box9}
						onClick={(e) => {
							Toggle(e, 8);
						}}></div>
				</div>
			</div>
			<button className=' reset' onClick={() => reset()}>
				Reset
			</button>
		</div>
	);
}

export default TicTocToe;
