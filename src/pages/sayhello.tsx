import { useEffect, useState } from 'react';

function Sayhello() {
	// 内部で状態を持つため useState を利用
	const [data, setData] = useState({ name: '' });

	// 外部のAPIにリクエストするのは副作用なのでuseEffect内で処理
	useEffect(() => {
		// pages/api/hello.tsの内容にリクエスト
		fetch('api/hello')
			.then((res) => res.json())
			.then((profile) => {
				setData(profile);
			});
	}, []);

	return <div>hello {data.name}</div>;
}

export default Sayhello;
