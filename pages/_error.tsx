import ErrorNext from 'next/error';
import { AxiosError } from 'axios';
import { NextApiResponse, NextPage, NextPageContext } from 'next';

interface Props {
	statusCode?: number
	response?: object
}

const Error: NextPage<Props> = ({ statusCode }) => {
	return (
		<>
			{statusCode
				? <ErrorNext statusCode={statusCode} />
			: <p>클라이언트 오류입니다.</p> }
			<p>고객센터에 문의주세요</p>
		</>
	);
}
	
Error.getInitialProps = ({ res, err }: NextPageContext) => {
	const statusCode = res ? res.statusCode : err ? (err as AxiosError).response?.status : 404
	console.log(`statusCode::: ${statusCode}`)
	return { statusCode }
}
	
export default Error