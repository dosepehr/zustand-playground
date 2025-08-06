import ChatBubble from '@/components/ChatBubble';
import Table from '@/components/Table';
import TCell from '@/components/Table/TCell';
import Tr from '@/components/Table/Tr';
import { Post } from '@/utils/api/mocks/api/posts';
import { baseURL } from '@/utils/constants/global';

export default async function Home() {
    const res = await fetch(`${baseURL}/posts`);
    const data: Post[] = await res.json();
    return (
        <div className='px-10'>
            <Table headData={['#', 'Likes', 'Title']}>
                {data.map((item, i) => (
                    <Tr key={item.id}>
                        <TCell>{i + 1}</TCell>
                        <TCell>{item.likes}</TCell>
                        <TCell>{item.title}</TCell>
                    </Tr>
                ))}
            </Table>
            <ChatBubble position='end' theme='error'>lflfl</ChatBubble>
        </div>
    );
}
