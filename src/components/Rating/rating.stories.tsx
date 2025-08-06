import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Rating from '.';

const meta: Meta<typeof Rating> = {
    title: 'components/Rating',
    component: Rating,
    tags: ['autodocs'],
    argTypes: {
        score: {
            control: { type: 'number', min: 0, max: 5 },
        },
        isDisabled: {
            control: 'boolean',
        },
        theme: {
            control: 'select',
            options: [
                'default',
                'primary',
                'secondary',
                'accent',
                'info',
                'success',
                'warning',
                'error',
                'neutral',
            ],
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        classname: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
    args: {
        score: 3,
        isDisabled: false,
        theme: 'warning',
        size: 'xs',
        classname: '',
    },
};

export const DisabledRating: Story = {
    args: {
        ratingId: 'rating-disabled',
        score: 4,
        isDisabled: true,
        theme: 'info',
        size: 'md',
        classname: '',
    },
};

export const AllScores: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 24 }}>
            {[1, 2, 3, 4, 5].map((score) => (
                <div key={score} style={{ textAlign: 'center' }}>
                    <Rating
                        ratingId={`rating-${score}`}
                        score={score}
                        isDisabled={false}
                        theme='primary'
                        size='md'
                    />
                    <div>
                        {score} star{score > 1 ? 's' : ''}
                    </div>
                </div>
            ))}
        </div>
    ),
};

export const AllThemes: Story = {
    render: () => {
        const themes = [
            'default',
            'primary',
            'secondary',
            'accent',
            'info',
            'success',
            'warning',
            'error',
            'neutral',
        ] as const;

        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
                {themes.map((theme) => (
                    <div key={theme} style={{ textAlign: 'center' }}>
                        <Rating
                            ratingId={`rating-theme-${theme}`}
                            score={4}
                            isDisabled={false}
                            theme={theme}
                            size='md'
                        />
                        <div>{theme}</div>
                    </div>
                ))}
            </div>
        );
    },
};

export const AllSizes: Story = {
    render: () => {
        const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

        return (
            <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                {sizes.map((size) => (
                    <div key={size} style={{ textAlign: 'center' }}>
                        <Rating
                            ratingId={`rating-size-${size}`}
                            score={3}
                            isDisabled={false}
                            theme='success'
                            size={size}
                        />
                        <div>{size}</div>
                    </div>
                ))}
            </div>
        );
    },
};
export const CustomStyles: Story = {
    render: () => {
        return (
            <Rating
                ratingId='1'
                score={2}
                classname='bg-red-100 p-4 rounded-lg'
                starClassname='!bg-red-500'
            />
        );
    },
};
