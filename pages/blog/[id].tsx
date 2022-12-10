import { useRouter } from 'next/router';

export default function BlogPost() {
    const router = useRouter();
    const { id } = router.query;
    return <p>Display page: {id}</p>
}
