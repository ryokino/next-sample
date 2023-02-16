// 型を利用するためにインポート

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router'; // next/router から useRouter というフックを取り込む
import { ParsedUrlQuery } from 'querystring';

type PostProps = {
	id: string;
};

const Post: NextPage<PostProps> = (props) => {
	const { id } = props;
	const router = useRouter();

	if (router.isFallback) {
		// フォールバックページ向けの返信を返す
		return <div>Loading...</div>;
	}

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<p>
					このページは静的サイト生成によってビルド時に生成されたページです。
				</p>
				<p>{`/posts/${id}に対応するページです`}</p>
			</main>
		</div>
	);
};

// getStaticProps　は生成したいページのパスパラメータの組み合わせを返す
// このファイルは pages/posts/[id].tsx なので、パスパラメータとして id の値を返す必要がある

export const getStaticPaths: GetStaticPaths = async () => {
	// それぞれのページのパスパラメータをまとめたもの
	const paths = [
		{
			params: {
				id: '1',
			},
		},
		{
			params: {
				id: '2',
			},
		},
		{
			params: {
				id: '3',
			},
		},
	];

	// fallback を false にすると、 paths で定義されたページ以外は404ページを表示する
	return {
		paths,
		fallback: false,
	};
};

// パラメータの方を定義
interface PostParams extends ParsedUrlQuery {
	id: string;
}

// getStaticPaths 実行後にそれぞれのパスにたいして getStaticProps　が実行される
export const getStaticProps: GetStaticProps<PostProps, PostParams> = async (
	context
) => {
	return {
		props: {
			// params に getStaticPaths で指定した値がそれぞれ入っている
			id: context.params!['id'],
		},
	};
};

export default Post;
