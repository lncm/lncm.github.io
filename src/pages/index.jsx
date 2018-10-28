import React from 'react';
import Layout from '../components/Layout';

export default () => (
  <Layout title="About us">
    <p><bold>Lightning Network Chiang Mai</bold> are a group of
    cryptocurrency developers focused on payment channel technology for Bitcoin,
    based in Chiang Mai.
    </p>
    <p>Our aim is to bring about real-world use of lightning by making
      it <italic>easier</italic> and <italic>cheaper</italic> to join the network.
    </p>
    <p>
      We dream of a world where anyone can transact freely, without excessive fees,
       censorship, fear of confiscation or loss of privacy.
    </p>
    <h2>
      Join us
    </h2>
    <p>
      We hold regular meetings around Chiang Mai to present and discuss our current projects.
    </p>
    <p>
     All contributors are welcome to join and all forms of contribution are highly valued,
     they do not have to be of a technical nature.
    </p>
    <p>
      Feel free to get in touch via
      Twitter <a href="https://twitter.com/messages/compose?recipient_id=1030362335485906944">direct message</a>, or otherwise.
    </p>
    <h2>
      Why Lightning?
    </h2>
    <p>
      The <a href="https://en.bitcoin.it/wiki/Lightning_Network">Lightning Network</a> allows payments to be made across the Internet
       within the blink of an eye.
    </p>
    <p>
      Payments can be smaller than fractions of a cent thus allowing for fairer
        billing methods, based on actual usage.
    </p>
    <p>
      Onion-style routing significantly increases financial privacy of trasacting parties
       and since channel peers pay each other directly using Bitcoin transactions, no
       third party must be trusted.
    </p>
  </Layout>
);
