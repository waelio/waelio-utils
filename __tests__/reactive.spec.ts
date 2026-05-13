import { reactive, watcher } from '../src/utils/reactive';

describe('reactive', () => {
  it('should update watchers when data changes', () => {
    const state = reactive({ count: 0, text: 'hello' });
    let dummy = 0;
    
    watcher(() => {
      dummy = state.count;
    });
    
    expect(dummy).toBe(0);
    state.count = 1;
    expect(dummy).toBe(1);
    state.count = 5;
    expect(dummy).toBe(5);
  });
});
