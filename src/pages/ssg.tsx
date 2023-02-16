// 型のための導入
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

// ページコンポーネントの props の型定義
type SSGProps = {
	message: string;
};

// SSG は getStaticProps が返した props を受け取ることができる
// NextPage<SSGProps> は message:string のみを受け取って生成されるページの型
const SSG: NextPage<SSGProps> = (props) => {
	const { message } = props;

	return (
		<div>
			<Head>
				<title>Static Site Generation</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<p>
					このページは静的サイト生成によってビルド時に生成されたページです。
				</p>
				<p>{message}</p>
			</main>
		</div>
	);
};

// getStaticProps はビルド時に実行される
// GetStaticProps<SSGProps> は　 SSGProps を引数にとる getStaticProps の型
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
	const timestamp = new Date().toLocaleString();
	const message = `${timestamp} に getStaticProps が実行されました。`;
	console.log(message);
	return {
		// ここで返した props を元にページコンポーネントを描画する
		props: {
			message,
		},
	};
};

export default SSG;
