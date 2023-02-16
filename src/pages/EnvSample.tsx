import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

const EnvSample: NextPage = (props) => {
	// サーバーサイドで描画するときは"test1"と表示され、クライアントサイドで再描画するときはundefinedと表示される
	console.log('process.env.test', process.env.test);

	// "test2"と表示される
	console.log(
		'process.env.NEXT_PUBLIC_TEST :>> ',
		process.env.NEXT_PUBLIC_TEST
	);

	return (
		<div>
			<Head>
				<title>俺のネクスト</title>
				<link rel='icon' href='/images/love.jpg' />
			</Head>
			<main>
				{/* サーバーサイド描画時は"test1"と表示され、クライアントサイドで再描画されると何も表示しない */}
				<p>{process.env.TEST}</p>
				{/* test2が表示される */}
				<p>{process.env.NEXT_PUBLIC_TEST}</p>
			</main>
		</div>
	);
};

// getStaticProps は常にサーバーサイドで実行されるので、全ての環境変数を参照できる
export const getStaticProps: GetStaticProps = async (context) => {
	// "test1"が表示される
	console.log('peocess.env.TEST :>> ', process.env.TEST);

	// "teset2"が表示される
	console.log(
		'process.env.NEXT_PUBLIC_TEST :>> ',
		process.env.NEXT_PUBLIC_TEST
	);

	return {
		props: {},
	};
};

export default EnvSample;