import Search from '@/components/Search';
import { mount } from '@vue/test-utils';

describe('Search - unit', () => {
  it('should mount the component', () => {
    const wrapper = mount(Search);

    expect(wrapper.vm).toBeDefined();
  });

  it('should emit search when form is submitted', async () => {
    const wrapper = mount(Search);

    const term = 'termo para busca';
    await wrapper.find('input[type="search"]').setValue(term);

    expect(wrapper.emitted().doSearch).toBeTruthy();
    expect(wrapper.emitted().doSearch.length).toBe(1);
    expect(wrapper.emitted().doSearch[0]).toEqual([{ term }]);
  });
});
