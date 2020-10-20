<ul>
{% for member in include.members %}
    {%- if member.name -%}
    <li> <p style="line-height:1rem; margin-bottom:0.3rem">
        {%- if member.website -%}
            <a href="{{ member.website }}" style="border-bottom:none">
        {%- endif -%} 
        <b> {{ member.name }} </b>
        {%- if member.website -%}
            </a>
        {%- endif -%} 
        {%- if member.location -%}
            <br/> {{ member.location }}
        {%- endif -%}
        {%- if member.email -%}
            <br/> <a href="mailto:{{ member.email }}">{{ member.email }}</a> <br/>
        {%- endif -%}
    </p> </li>
    {%- else -%}
        <li> {{ member }} </li> 
    {%- endif -%}
{% endfor %}
</ul>
