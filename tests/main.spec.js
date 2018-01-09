import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import { search, searchAlbumns, searchArtist, searchPlaylist, searchTracks } from './../src/main';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('Spotify Wrapper', () => {

  describe('smoke tests', () => {
    it('should exist the search method', () => {
      expect(search).to.exist;
    });

    it('should exist the searchAlbumns method', () => {
      expect(searchAlbumns).to.exist;
    });

    it('should exist the searchArtist method', () => {
      expect(searchArtist).to.exist;
    });

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist the searchPlaylist method', () => {
      expect(searchPlaylist).to.exist;
    });

  });

  describe('Generic Search', () => {
    it('should call fetch function', () => {
      const fetchedStub = sinon.stub(global, 'fetch');

      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;
    });
  });
});
