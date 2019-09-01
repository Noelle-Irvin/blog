import React from 'react';
import enzyme from 'enzyme';
import { Posts } from './Posts';

describe('Posts test', () => {

    const posts = [
        {
            title: 'Title1',
            date: 'August 31st, 2019',
            body: 'Lorem ipsum...'
        }, 
        {
            title: 'Title2',
            date: 'September 23rd, 2017',
            body: 'Best day...'
        }
    ];

    it('should render title and posts', () => {
        const wrapper = enzyme.shallow(<Posts posts={posts} />);
        expect(wrapper.find('.title').at(0).text())
            .toEqual('Posts');
        // expect(wrapper.find(Post).getElements())
        //     .toHaveLength(2);
    });

});